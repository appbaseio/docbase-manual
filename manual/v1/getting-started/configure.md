## docbase-config.js options

```js
var docbaseConfig = {
  "method": "github",
  "map": {
    "file": "map.json",
    "path": ""
  },
  "generic": {
    "baseurl": "",
    "path": ""
  },
  "file": {
    "path": ""
  },
  "github": {
    "user": "appbaseio",
    "repo": "Docs",
    "path": "src",
    "branch": "master",
    "access_token": "YjFiZWY3NWYwYzQ4MmEwMjU4NmFiNGRkMGU4NjY3NDA5YWM3ZDdjZQ=="
  },
  "indexHtml": "./html/main.html",
  "flatdocHtml": "./bower_components/docbase/html/flatdoc.html",
  "html5mode": false,
  "default_version": null,
  "versions" : {
   "v1": [{
     "name": "sample",
     "label": "Sample Label",
     "files": [{
       "name": "sample1",
       "label": "Sample 1 Doc"
     },]
   }, {
     "name": "howtostart",
     "label": "How to start",
     "files": [{
       "name": "starting",
       "label": "Starting with docbase"
     }]
   }],
   "v2": [{
     "name": "sample",
     "label": "Sample Label",
     "files": [{
       "name": "sample1",
       "label": "Sample 2 Doc"
     }]
   }]
 }
};
```
