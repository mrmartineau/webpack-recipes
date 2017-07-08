# Basic HTML example
> Generate a basic HTML page from a basic template

*Extend the [basic](https://github.com/mrmartineau/webpack-recipes/blob/master/basic/webpack.config.babel.js) config.*

```
npm install --save-dev webpack html-webpack-plugin
```

```diff
  // webpack.config.babel.js
  const {resolve} = require('path')
+ const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
      app: './index.js',
    },
    output: {
      filename: 'bundle.[name].js',
      path: resolve(__dirname, 'dist'),
-   }
+   },
+   plugins: [
+     new HtmlWebpackPlugin({
+       inject: true,
+       template: resolve(__dirname, 'src/index.html'),
+     })
+   ]
  }
```

## Usage
Create an HTML file in your `src` directory to use as a template. This means you can craft your own starter HTML file and Webpack will add the relevant `<script>` tags to the page and update when versions change.

## Cache-bust your JavaScript
To change value of `output.filename` in your `webpack.config.babel.js` like so:

```diff
    // webpack.config.babel.js
    output: {
-     filename: 'bundle.[name].js',
+     filename: 'bundle.[name].[hash].js',
      path: resolve(__dirname, 'dist'),
    }
```

This produces a new file `bundle.app.c139b60cf9902d96d885.js` where the hash will change every time you change your source code.
