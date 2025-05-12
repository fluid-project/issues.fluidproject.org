---json
{
  "title": "FLUID-3283",
  "summary": "Many demo pages are missing Instructions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "Anastasia Cheetham",
  "date": "2009-10-13T16:17:54.000-0400",
  "updated": "2010-12-14T13:41:05.525-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3283/3283.rtf",
      "filename": "3283.rtf"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3283/FLUID-3283.patch",
      "filename": "FLUID-3283.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3283/FLUID-3283-2.patch",
      "filename": "FLUID-3283-2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3283/FLUID-3283-3.patch.txt",
      "filename": "FLUID-3283-3.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3283/FLUID-3283-4.patch",
      "filename": "FLUID-3283-4.patch"
    }
  ],
  "comments": [
    {
      "id": "18984",
      "author": "Justin Obara",
      "date": "2010-05-07T13:54:38.787-0400",
      "body": "a11y issue\n"
    },
    {
      "id": "18988",
      "author": "Jonathan Hung",
      "date": "2010-12-09T15:07:07.159-0500",
      "body": "Instruction text confirmed / edited for:\n\nRich text inline edit\\\nSimple Inline Edit\\\nKeyboard a11y\\\nProgress\\\nGrid Reorderer\\\nImage Reorderer\\\nLayout Reorderer\\\nList Reorderer\\\nUI Options\n"
    },
    {
      "id": "18992",
      "author": "Jonathan Hung",
      "date": "2010-12-09T15:08:00.683-0500",
      "body": "Some of this work being done as part of Fluid-3757.\n"
    },
    {
      "id": "18995",
      "author": "Justin Obara",
      "date": "2010-12-09T15:44:15.839-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "id": "18998",
      "author": "heidi valles",
      "date": "2010-12-13T11:50:14.279-0500",
      "body": "Clarifies, fixes typos, makes consistent demo instructions for several demos.\n"
    },
    {
      "id": "19001",
      "author": "Jonathan Hung",
      "date": "2010-12-13T12:28:39.165-0500",
      "body": "Instructions present and accounted for. Closing.\n"
    },
    {
      "id": "19006",
      "author": "Jonathan Hung",
      "date": "2010-12-13T12:29:08.053-0500",
      "body": "Done.\n"
    },
    {
      "id": "19009",
      "author": "Justin Obara",
      "date": "2010-12-13T16:19:17.930-0500",
      "body": "There were grammar mistakes, placement issues, and etc.\n"
    },
    {
      "id": "19013",
      "author": "Jess Mitchell",
      "date": "2010-12-13T18:15:49.786-0500",
      "body": "I broke protocol and made edits to \"Build\" without seeing Heidi's patch.  This is the master file Heidi and I made to combine her patch with further edits.\n"
    },
    {
      "id": "19015",
      "author": "heidi valles",
      "date": "2010-12-13T20:56:10.043-0500",
      "body": "jess and i revamped most of the demo instruction text, and mouse & keyboard instructions\n"
    },
    {
      "id": "19019",
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T10:53:48.467-0500",
      "body": "I've had a look over these changes, and they are definitely an improvement. I've adjusted a comma here, an 's' there, and changed some 'button's to 'key's. A revised patch is attached: (FLUID-3283-3.patch.txt)\n"
    },
    {
      "id": "19022",
      "author": "Jonathan Hung",
      "date": "2010-12-14T11:22:52.400-0500",
      "body": "Added some minor changed to FLUID-3283-3 patch. This file contains the edits from FLUID-3283-3.\n"
    },
    {
      "id": "19025",
      "author": "Jonathan Hung",
      "date": "2010-12-14T11:48:13.591-0500",
      "body": "Done.\n"
    },
    {
      "id": "19028",
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T12:59:02.908-0500",
      "body": "Jess caught the fact that the Reorderer demos lost instructions about using letter keys to move focus.\n"
    },
    {
      "id": "19031",
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T13:12:49.586-0500",
      "body": "Jess, I've committed a change to the reorder instructions, after some discussion in the channel. Could you review, and if you agree, close this issue?\n"
    }
  ]
}
---
Even if there aren't really any instructions for a demo, we should have some text in the Instructions section - either that, or remove the heading.

This affects the following demo pages:\
Layout Reorderer\
List Reorderer\
Grid Reorderer\
Image Reorderer (there is text, but it's not really instructions)\
Simple Text Inline Edit\
Pager\
Progress\
User Interface Options\
Rich Text Inline Edit

        