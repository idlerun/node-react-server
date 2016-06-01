---
page: https://idle.run/node-react-server
title: Webpack NodeJS Server with ReactJS Client
tags: nodejs react webpack
date: 2016-05-31
---

## About

This project is a starter template for a web server project with:

- NodeJS server using Express 4 (with HTTPS)
- ReactJS client packed up with webpack

Extra goodies:

- SASS support
- Static resource serving
- AJAX using JQuery
- Babel loader
- `morgan` and `log-timestamp` improve Node console logging


### Getting started

**Check out the project from github**

```bash
git clone https://github.com/idlerun/node-react-server.git
```

**Install deps**

```bash
npm install
```

#### Dev Server

**Run dev server locally**

```bash
npm run dev
```

#### Production Build

Build the JS to static resources (in /public)

```bash
npm run build
```

Now webpack is done its job and no longer needed.
The dependencies for `dev` can be removed by running

```bash
npm prune --production
```

Or remove the `node_modules` dir and install only the production dependencies

```bash
npm install --production
```

Run the prod server with

```bash
node .
```

### Next Steps

- Edit the server starting in [`src/server/`](https://github.com/idlerun/node-react-server/tree/src/server/)
- Edit the client starting in [`src/client/`](https://github.com/idlerun/node-react-server/tree/src/client/)

Browse the rest of the template and customize to your preference!


### Caveats

** Auto-reload not supported **

The biggest lacking feature to me is that the dev server needs to be manually
restarted to adopt any changes. We can't trivially use the webpack dev server since
we are also running Express to host the server API.