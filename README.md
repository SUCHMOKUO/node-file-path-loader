# node-file-path-loader

[![Actions Status](https://github.com/SUCHMOKUO/node-file-path-loader/workflows/Workflow/badge.svg)](https://github.com/SUCHMOKUO/node-file-path-loader/actions)
[![](https://img.shields.io/npm/v/node-file-path-loader.svg)](https://www.npmjs.com/package/node-file-path-loader)

A webpack loader that get the absolute path of file imported at runtime.

## Why?

This is useful when you are using webpack to build your Node.js/Electron project and just want the absolute path of the file instead of contents. For example, use this loader to get your absolute resources path in Electron at runtime.

```js
import iconPath from "@/resources/image/icon.ico";

const win = new BrowserWindow({ icon: iconPath });
```

Another scenario is that if you're using typescript to write your worker file, it would be much easier to load your worker file by using [ts-loader] with this loader.

```js
import compiledWorkerPath from "node-file-path-loader!ts-loader!./worker.ts";

const worker = new Worker(workerPath);
```

## Notification

1. This loader is only works in **Node.js environments**, like Node.js/Electron.

## Installation

```bash
npm install node-file-path-loader
```

## Necessary webpack configurations

You need to set webpack target to `node` and disable mocking of `__dirname`.

```js
// webpack.config.js
module.exports = {
  target: "node",
  node: {
    __dirname: false,
  },
};
```

## Options

### `outputPath`

Type: `String`
Default: `undefined`

Specify a filesystem path where the target file(s) will be placed.

[ts-loader]: https://github.com/TypeStrong/ts-loader
