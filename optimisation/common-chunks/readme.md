# Simple code splitting example
> Split all `node_module` vendor code into separate file

*Extend the [simple HTML](https://github.com/mrmartineau/webpack-recipes/blob/master/html/simple/webpack.config.babel.js) config.*

```
npm install --save-dev webpack
```

```diff
  // webpack.config.babel.js
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
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: resolve(__dirname, 'src/index.html'),
      })
    ],
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
-   })
+   }),
+   new webpack.optimize.CommonsChunkPlugin({
+     name: 'vendor',
+     minChunks: module => {
+       return module.context && module.context.indexOf("node_modules") !== -1;
+     }
+   })
   ],
  }
```

## Usage
Using the above setup, Webpack will create a new `vendor.bundle.js` file that contains all dependencies from the `node_modules` folder.

In this example, [`lodash`](https://lodash.com/) is being used as the 'vendor' and is being imported into the `foo.js` file; install it with `npm install --save-dev lodash`.
