# Docusaurus Netlify CMS Starter

This is a starter website built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator, with Netlify CMS enabled.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Alexa-Green/docusaurus-netlify-cms)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

```
$ npx netlify-cms-proxy-server
```

This command starts the local CMS proxy so that you can edit content locally

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
