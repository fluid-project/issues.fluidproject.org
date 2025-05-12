---json
{
  "title": "FLUID-2005",
  "summary": "Only the top border and close button are visible when openning UI Options dialog: Using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-12-17T11:29:08.000-0500",
  "updated": "2009-01-08T08:38:36.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2049/",
      "key": "FLUID-2049"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2005/2005.patch",
      "filename": "2005.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2005/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "id": "17806",
      "author": "Justin Obara",
      "date": "2008-12-17T11:29:45.000-0500",
      "body": "This will also occur if you click the \"Edit Appearance\" button without moving the mouse at all.\n"
    },
    {
      "id": "17808",
      "author": "Justin Obara",
      "date": "2008-12-17T11:31:38.000-0500",
      "body": "'screenshot-1' shows the UI Options dialog with only the top border adn close button visible\n"
    },
    {
      "id": "17810",
      "author": "Jacob Farber",
      "date": "2008-12-19T12:55:49.000-0500",
      "body": "Changed the ajax call to only display dialog once load completed.\n"
    },
    {
      "id": "17812",
      "author": "Justin Obara",
      "date": "2009-01-05T11:09:48.000-0500",
      "body": "Verified fix using:\n\nIE 6 (Win XP)\n"
    },
    {
      "id": "17814",
      "author": "Michelle D'Souza",
      "date": "2009-01-05T16:21:42.000-0500",
      "body": "I'm going to undo the code changes because they caused <https://fluidproject.atlassian.net/browse/FLUID-2049#icft=FLUID-2049>. I can't reproduce the bug anymore.\n"
    },
    {
      "id": "17816",
      "author": "Justin Obara",
      "date": "2009-01-06T08:37:47.000-0500",
      "body": "I am able to reproduce this bug, now that the code changes have been reversed\n"
    },
    {
      "id": "17818",
      "author": "Justin Obara",
      "date": "2009-01-06T12:09:49.000-0500",
      "body": "Bug Parade  0.7 release\n"
    },
    {
      "id": "17821",
      "author": "Jacob Farber",
      "date": "2009-01-07T10:27:21.000-0500",
      "body": "Fixed dialog show/hide to fire at the right time, even if ajax isnt called\n"
    },
    {
      "id": "17825",
      "author": "Anastasia Cheetham",
      "date": "2009-01-07T16:45:26.000-0500",
      "body": "I've reviewed and tested this patch - it looks good to me!\n"
    },
    {
      "id": "17830",
      "author": "Justin Obara",
      "date": "2009-01-08T08:38:36.000-0500",
      "body": "Verified fix using:\n\nIE6 (Win XP)\n"
    }
  ]
}
---
Only the top border and close button are visible when openning UI Options dialog: Using IE6

Steps to reproduce:

1\) Open the Sakai mock-up\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Using the keyboard, tap the 'tab' key until the "Edit Appearance" button has focus

3\) Using the keyboard, tap the 'enter' key to activate the button

Notice that only the top border and the close button  are visible.

The entire dialog will open if the mouse is moved or the tab key is pressed

        