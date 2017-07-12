# Simple Webpack Dev Server
> Setup a simple webpack-dev-server example, that provides you with a server and live reloading.

*Extend the [simple html](https://github.com/mrmartineau/webpack-recipes/blob/master/basic/webpack.config.babel.js) config.*

```
npm install --save-dev webpack html-webpack-plugin webpack-dev-server
```

```diff
  // webpack.config.babel.js
+ const webpack = require('webpack')
  const {resolve} = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
      app: './index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: resolve(__dirname, 'dist'),
    },
+   devServer: {
+     hot: true,
+     publicPath: '/',
+     historyApiFallback: true
+   },
    plugins: [
+     new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: resolve(__dirname, 'src/index.html'),
      })
    ]
  }

  // package.json
  "scripts": {
    "build": "webpack",
    "watch": "webpack -w",
    "compress": "webpack -p",
+   "dev": "webpack-dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## Usage
Run `npm run dev` to spin up the dev server.
