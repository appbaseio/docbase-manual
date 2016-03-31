#Quick Start

This 

##About Docbase

[Docbase](https://github.com/appbaseio/Docbase) turns your **markdown** documentation project into a collaborative HTML site.

* Fetches the markdown files and layout from a Github hosted repository (or a local filesystem)
* Renders it as a beautiful single page app (SPA) or HTML site
* Gorgeous colorful themes based on flatdoc, it’s responsive!
* Deployable via GitHub pages
* Setup a CI workflow with Travis
* No server-side components
* Built-in offline search
* Open Source, MIT License

##Getting Started

Docbase comes with a yeoman generator that does all of the above with a simple ``yo docbase`` command.

```bash
1. npm install -g yo

█████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

2. npm install -g generator-docbase

██████████▒▒▒▒▒▒▒▒▒▒

3. yo docbase

Welcome to
    .___           ___.
  __| _/____   ____\_ |__ _____    ______ ____
 / __ |/  _ \_/ ___\| __ \\__  \  /  ___// __ \
/ /_/ (  <_> )  \___| \_\ \/ __ \_\___ \\  ___/
\____ |\____/ \___  >___  (____  /____  >\___  >
     \/           \/    \/     \/     \/     \/
        generator!

...

4. python -m SimpleHTTPServer 1234

████████████████████
```

##Project Structure

Once you have the project working, this is how the directory structure would look like:

```
  |_ images
  |_ bower_components
  |_ html
  |_ node_modules
  |_ docbase-config.js
  |_ index.html
  |_ package.json
  |_ styles
  |  |_ style.css
  |  |_ theme.scss
  |_ search-index.json
  |_ docs
  |  |_ v1
  |     |_ howtostart
  |        |_ starting.md
  |_ js
  |  |_ docbase.js
  |_ GruntFile.js
  |_ .travis.yml
```

Docbase's generator creates ``docbase-config.js``, ``search-index.json``, ``styles/theme.scss``. It optionally creates ``docs_html`` folder for HTML mode and ``.travis.yml`` for a CI workflow with travis.

The default path for reading markdown files locally is ``docs``. One can of course configure it in the generator or directly in ``docbase-config.js`` file.

```bash
  |_ docs
     |_ v1
        |_ howtostart
           |_ starting.md
```
And to each file created you need to add or change the file 'docbase-config.js' to map the files and create the menus!

```javascript
"versions" : {
  "v1": [{
      "name": "howtostart",
      "label": "How to start",
      "files": [{
        "name": "starting",
        "label": "Starting with docbase"
        },{
          "name": "new_file",
          "label": "Label to the new file"
          }]
...
```
To the file
```bash
  |-docs
  |  |-v1
  |  |  |-howtostart
  |  |  |  |-starting.md
  |  |  |  |-new_file.md
```
###So lets do it
