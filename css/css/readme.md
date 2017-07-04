# CSS
> Bundle & inject CSS

*Extend the [basic](https://github.com/mrmartineau/webpack-recipes/blob/master/basic/webpack.config.babel.js) config.*

```
npm install --save-dev css-loader style-loader
```

```diff
  // webpack.config.babel.js
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

  // package.json
  "devDependencies": {
+   "css-loader": "^0.28.4",
+   "style-loader": "^0.18.2",
    "webpack": "^3.0.0"
  }
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
+ const ExtractTextPlugin = require("extract-text-webpack-plugin")

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

  // index.html
  <head>
    <title>Webpack recipe</title>
+   <link rel="stylesheet" href="/dist/styles.css">
  </head>
```

## Add Sourcemaps
Use `'eval'` in development and `'source-map'` in production.

```diff
  // webpack.config.babel.js
  module: {
    rules: [
      // ...
    ]
  ],
+ devtool: 'eval', // or 'source-map'
```

