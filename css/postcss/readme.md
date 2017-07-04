# PostCSS
> Bundle & inject [PostCSS](http://postcss.org/) processed CSS

*Extend the [basic CSS](https://github.com/mrmartineau/webpack-recipes/tree/master/css/css#readme) [config](https://github.com/mrmartineau/webpack-recipes/blob/master/css/css/webpack.config.babel.js) with the PostCSS config.*

```
npm install --save-dev css-loader style-loader postcss-loader
```

```diff
  // webpack.config.babel.js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
-           'css-loader',
+           {
+             loader: 'css-loader',
+             options: {
+               importLoaders: 1
+             }
+           },
+           'postcss-loader'
          ]
        }
      ]
    }
  }

  // package.json
  "devDependencies": {
+   "autoprefixer": "^7.1.1",
+   "css-loader": "^0.28.4",
+   "postcss-loader": "^2.0.6",
+   "style-loader": "^0.18.2",
    "webpack": "^3.0.0"
- }
```

## Usage
`import` a CSS file relative to your javascript module

```diff
// index.js
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
-             {
-               loader: 'css-loader',
-               options: {
-                 importLoaders: 1
-               }
-             },
-             'postcss-loader'
-           ]
+           use: ExtractTextPlugin.extract({
+             fallback: 'style-loader',
+             use: [
+               {
+                 loader: 'css-loader',
+                 options: {
+                   importLoaders: 1
+                 }
+               },
+               'postcss-loader'
+             ]
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

  // index.html
  <head>
    <title>Webpack recipe</title>
+   <link rel="stylesheet" href="/dist/styles.css">
  </head>
```

