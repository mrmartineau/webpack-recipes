# CSS
> Bundle & inject CSS

```
npm install --save-dev css-loader style-loader
```

Extend the [basic](https://github.com/mrmartineau/webpack-recipes/blob/master/basic/webpack.config.babel.js) config with the PostCSS config.

```diff
  module.exports = {
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader',
+         ]
+       }
+     ]
+   }
  }
```

## Usage
`import` a CSS file relative to your javascript module

e.g. index.js
```diff
+ import('./css/index.css')
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

