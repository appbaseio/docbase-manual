var docbaseConfig = {
  "method": "github",
  "generic": {
    "baseurl": "",
    "path": ""
  },
  "file": {
    "path": ""
  },
  "github": {
    "user": "appbaseio",
    "repo": "docbase-manual",
    "path": "manual",
    "branch": "master",
    "access_token": "YjFiZWY3NWYwYzQ4MmEwMjU4NmFiNGRkMGU4NjY3NDA5YWM3ZDdjZQ=="
  },
  "indexHtml": "./html/main.html",
  "flatdocHtml": "./bower_components/docbase/html/flatdoc.html",
  "html5mode": false,
  "default_version": "",
  "manual_override": true,
  "versions" : {
  "v1": [
    {
      "name": "getting-started",
      "label": "Getting Started",
      "files": [
        {
          "name": "start",
          "label": "Quick Start"
        },
        {
          "name": "configure",
          "label": "Configuration Options"
        }
      ]
    },
    {
      "name": "features",
      "label": "Features",
      "files": [
        {
          "name": "search",
          "label": "Search"
        },
        {
          "name": "colors",
          "label": "Colorful"
        },
        {
          "name": "gh-pages",
          "label": "Deploy to Github"
        },
        {
          "name": "versions",
          "label": "Versatile Navigation"
        }
      ]
    },
    {
      "name": "layout",
      "label": "Layout",
      "files": [
        {
          "name": "navigation",
          "label": "Site Navigation"
        },
        {
          "name": "3col",
          "label": "Three columns"
        }
      ]
    }
  ],
  "v2 (alpha)": [
    {
      "name": "changelog",
      "label": "Changes",
      "files": [
        "name": "changelog",
        "label": "Changelog"
      ]
    }
  ]
}
}
