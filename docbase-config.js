var docbaseConfig = {
  "method": "file",
  "map": {
    "file": "map.json",
    "path": ""
  },
  "generic": {
    "baseurl": "",
    "path": "manual"
  },
  "file": {
    "path": "manual"
  },
  "github": {
    "user": "",
    "repo": "",
    "path": "",
    "branch": "",
    "access_token": ""
  },
  "indexHtml": "./html/main.html",
  "flatdocHtml": "./bower_components/docbase/html/flatdoc.html",
  "html5mode": false,
  "default_version": null,
  "versions" : {
    "v1": [{
      "name": "getting-started",
      "label": "Getting Started",
      "files": [{
        "name": "start",
        "label": "Quick Start"
      }, {
        "name": "configure",
        "label": "Configuration Options"
      }]
    }, {
      "name": "features",
      "label": "Features",
      "files": [{
        "name": "search",
        "label": "Search"
      }, {
        "name": "colors",
        "label": "Colorful"
      }, {
        "name": "gh-pages",
        "label": "Deploy to Github"
      }, {
        "name": "versions",
        "label": "Versatile Navigation"
      }]
    }, {
      "name": "layout",
      "label": "Layout",
      "files": [{
        "name": "navigation",
        "label": "Site Navigation"
      }, {
        "name": "3col",
        "label": "Three columns"
      }, {
        "name": "markdown",
        "label": "Markdown Options"
      }
     ]
    }]
  }
}
