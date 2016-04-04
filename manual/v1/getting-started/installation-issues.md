# Installation Issues

While using the ``yo docbase`` command is generally straightforward, it relies on ``node`` and ``npm`` to work reliably on the system. Due to the constant changes and compatibility issues, there might be some installation issues. Here, we try to document the most frequent issues we came across while developing and point to a solution that worked for those issues.

## Installing node and npm

If you don't have ``node`` and ``npm`` installed, we recommend installing it from the official site https://nodejs.org/en/download/. Your OS's package manager might have legacy versions.

## Installing yeoman

Installing yeoman should be straightforward. You can apply ``sudo`` as a prefix to this command.

```
npm install -g yo
```

One issue we noted with using yeoman is an EACCESS error where yeoman can't read the configuration file at ~/.config/configstore/insight-yo.json. If you are seeing this, this thread is relevant https://github.com/yeoman/yeoman.github.io/issues/282 (look for setting group permissions for parent directories).


## Installing grunt-cli and bower

docbase assumes that user has ``grunt-cli`` and ``bower`` packages installed. If you don't have them (yet), you can install them using:

```
npm install -g grunt-cli
npm install -g bower
```

## Running `yo docbase`

``yo docbase`` should be straightforward to run. It generates a docbase-config.json file and performs ``npm install``, ``bower install`` and ``grunt`` operations. If the generator fails at some point, you can rerun the individual commands as

```
npm install
bower install
grunt
```

``Note:`` If you are running bower as a root user, you will need to run ``bower install --allow-root``.

## The phantom menace .. err phantom

Docbase's process of creating html pages is two pronged: It first creates a SPA and then relies on [phantom](https://www.npmjs.com/package/phantom) to transform the SPA routes to an HTML site. There are some known issues with phantom:

- spawn grunt ENOENT while trying to install phantom@0.7.2. Try installing ``npm install -g phantomjs-prebuilt`` before proceeding ahead. Phantom is a node module that spawns a phantomjs process and interacts with it via socket.io, so if you see this error - most likely, you are missing the ``phantomjs-prebuilt`` module.  

- Error while loading shared library. Typically, the solution is to install the library via your package manager: ``apt-get install libfontconfig`` if you are on ubuntu and phantomjs is complaining about missing libfontconfig, [More here](https://github.com/giakki/uncss/issues/165).  

- Caching is enabled after some bytes are written - [issue](https://github.com/ariya/phantomjs/issues/13165). The key here is to remove the ``build_html/`` directory and then proceeding to run the ``grunt`` task again.  

