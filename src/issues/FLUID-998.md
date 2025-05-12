---json
{
  "title": "FLUID-998",
  "summary": "Progress unit tests fail.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-23T18:04:12.000-0400",
  "updated": "2008-07-29T15:50:23.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2 (Mac OS 10.5)\\\nIE 6, IE7, Opera 9.5 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-998/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "id": "20071",
      "author": "Justin Obara",
      "date": "2008-07-23T18:06:23.000-0400",
      "body": "'screenshot-1' shows the failed unit tests\n"
    },
    {
      "id": "20074",
      "author": "Justin Obara",
      "date": "2008-07-23T18:07:31.000-0400",
      "body": "IE7 fails 6.3, 6.5, 6.7\n"
    },
    {
      "id": "20076",
      "author": "Justin Obara",
      "date": "2008-07-24T16:39:22.000-0400",
      "body": "now only failing in IE6 and IE7\n"
    },
    {
      "id": "20078",
      "author": "Anastasia Cheetham",
      "date": "2008-07-29T15:45:49.000-0400",
      "body": "The test has been changed to reflect browser differences.\n"
    },
    {
      "id": "20081",
      "author": "Justin Obara",
      "date": "2008-07-29T15:50:23.000-0400",
      "body": "Verified fix using\\\nFF2 (Mac OS 10.5)\\\nIE6, IE7, Opera 9.5 (Win XP)\n"
    }
  ]
}
---
Fails test 5 and 6.

        