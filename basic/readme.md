# CSS
> Bundle Javascript

```
npm install --save-dev webpack
```

```js
const {resolve} = require('path')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
  },
  output: {
    filename: 'bundle.[name].js',
    path: resolve(__dirname, 'dist'),
  }
}
```

## Usage
`import` a CSS file relative to your javascript module

e.g. index.js
```js
import('./css/index.css')
```

## Extract CSS from the bundle into a file

### Install [`extract-text-webpack-plugin`](https://github.com/webpack-contrib/extract-text-webpack-plugin)
```sh
npm install --save-dev extract-text-webpack-plugin
```

```diff
+ const ExtractTextPlugin = require("extract-text-webpack-plugin");

  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
-           use: [
-             'style-loader',
-             'css-loader',
-           ]
+           use: ExtractTextPlugin.extract({
+             fallback: "style-loader",
+             use: "css-loader"
+           })
+         }
      ]
    },
+   plugins: [
+     new ExtractTextPlugin("styles.css"),
+   ]
  }
```

## Add Sourcemaps
Use `'eval'` in development and `'source-map'` in production.

```diff
  module: {
    rules: [
      // ...
    ]
  ],
+ devtool: 'eval', // or 'source-map'
```

