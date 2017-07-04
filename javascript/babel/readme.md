# Javascript - Babel
> Bundle ES2015+ Javascript with Babel transpiler

*Extend the [basic](https://github.com/mrmartineau/webpack-recipes/blob/master/basic/webpack.config.babel.js) config.*

```
npm install --save-dev babel-loader babel-preset-env babel-core
```

```diff
  // webpack.config.babel.js
  module.exports = {
+   module: {
+     rules: [
+       {
+         test: /\.js$/,
+         exclude: /node_modules/,
+         loader: 'babel-loader',
+         query: {
+           cacheDirectory: true,
+         },
+       },
+     ]
+   },
  }
```

## Babel config
Add the below config to your package.json. It uses [babel-preset-env](https://babeljs.io/docs/plugins/preset-env/) to determine what features to transpile, so you need to ensure that your config's `browsers` array is correct. If you need to test the browserlist, visit [browserl.ist/](http://browserl.ist).

```diff
// package.json
   "devDependencies": {
     //..
-  }
+  },
+  "babel": {
+    "presets": [
+      [
+        "env",
+        {
+          "targets": {
+            "browsers": [
+              "last 2 versions"
+            ]
+          },
+          "modules": false,
+          "debug": true
+        }
+      ]
+    ]
+  }
```

## Usage
`import` a Javascript file relative to your javascript module

```js
// index.js
import foo from './foo';

foo();

// foo.js
export default class foo {}
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

