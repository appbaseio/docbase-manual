# Configuration

``yo docbase`` - the yeoman generator command for docbase creates a config file based on user selected options. For most users, the generator should be all they need to work with docbase.

However, docbase is easily customizable with this config file ``docbase-config.js``. We will show a sample configuration file and explain how to use different options to affect the customization.

## docbase-config.js options

```js
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
    "repo": "Docs",
    "path": "src",
    "branch": "master",
    "access_token": "YjFiZWY3NWYwYzQ4MmEwMjU4NmFiNGRkMGU4NjY3NDA5YWM3ZDdjZQ=="
  },
  "indexHtml": "./html/main.html",
  "title": "My custom <b>title</b>",
  "flatdocHtml": "./bower_components/docbase/html/flatdoc.html",
  "default_version": "",
  "manual_override": "false",
  "publish": "local",
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

### Breaking It Down

* ``method`` - Indicates the mode for reading the markdown files.
* ``file`` - If method is file, docbase will read the ``path`` option from here.
* ``github`` - If method is github (like in this sample config), it will take various github options from this.
* ``generic`` - If method is generic, it will take ``baseurl`` (URL) and ``path`` (relative path from the URL, optional) from here.
* ``indexHTML`` is a path to the main html file. You can change the structure, put custom links or altogether provide a different file.
* ``title`` sets documentation title as specified by the user. It's an optional parameter.
* ``versions`` is a nested JSON layout for the .md files. It allows specifying a sequential order to the files and providing labels. ``versions`` is optional when using the ``github`` method, as docbase can infer the layout from github's APIs.
* ``default_version`` - The main version that you want for your docs, particularly useful when not specifying the ``versions`` option.
* ``manual_override`` - If set to true, docbase takes the layout from the config file.
* ``publish`` - Can be either "local" or "github", denotes where docbase will be deployed.

**``Note:``** ``github.access_token`` is **base64** encoded to prevent spamming. However it is not secure, we recommend only providing the necessary permissions (public_repo) for the token. Docbase uses this token to overcome the default rate-limiting restrictions by Github's API, and providing the token is optional.
