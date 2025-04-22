import highlightjs from "markdown-it-highlightjs";
import parseTransform from "./src/_transforms/parse.js";
import * as pagefind from "pagefind";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import postcss from "postcss";
import atImport from "postcss-import";
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import autoprefixer from "autoprefixer";
import csso from 'postcss-csso';

export default function eleventy(eleventyConfig) {
  eleventyConfig.addCollection("projects", (collectionsApi) => collectionsApi
    .getFilteredByGlob("src/projects/*.md")
    .sort(function (a, b) {
      return a.data.title.localeCompare(b.data.title);
    }
  ));

  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (content, path) => {
      if (path !== './src/assets/styles/style.css') {
        return;
      }

      return async () => {
        let output = await postcss([
          atImport(),
          autoprefixer(),
          purgeCSSPlugin({
            content: ['./src/**/*.njk'],
            safelist: {
              standard: ['form', 'input', '[type="checkbox"]', 'button', 'fieldset', 'legend', 'mark', 'code', 'pre', 'hljs-string', 'hljs'],
            }
          }),
          csso()
        ]).process(content, {
          from: path,
        });

        return output.css;
      }
    }
  });

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@github/relative-time-element/dist": "assets/scripts/relative-time/" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@zachleat/filter-container/filter-container.js": "assets/scripts/filter-container.js" });

  eleventyConfig.addFilter("autolink", function (content) {
    return content.replaceAll(/(?<![\/>=])\b([A-Z]+-[0-9]+)\b/g, '<a href="/browse/$1/">$1</a>');
  });

  eleventyConfig.addTransform("parse", parseTransform);
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(highlightjs));
  eleventyConfig.on("afterBuild", async () => {
    // Create a Pagefind search index to work with
    const { index } = await pagefind.createIndex();

    // Index all HTML files in a directory
    await index.addDirectory({
      path: "_site"
    });

    // Write the index to disk
    await index.writeFiles({
      outputPath: "_site/pagefind"
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: false,
  };
}
