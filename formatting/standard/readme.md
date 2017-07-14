# Standard
> Linting your code with [standard](https://standardjs.com/)

*Extend the [JavaScript Babel](https://github.com/mrmartineau/webpack-recipes/blob/master/javascript/babel/webpack.config.babel.js) config.*

```
npm install --save-dev babel-loader babel-preset-env babel-core standard-loader babel-eslint
```

```diff
  // webpack.config.babel.js
  module.exports = {
    module: {
      rules: [
+       {
+         enforce: 'pre',
+         test: /\.js?$/,
+         loader: 'standard-loader',
+         exclude: /node_modules/,
+         options: {
+           error: false,
+           parser: 'babel-eslint'
+         }
+       },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
          },
        },
      ]
    },
  }
```

> n.b adding `enforce: 'pre' means that rule will execute before the others. This is very useful for linters

Find out all the other config options for the [standard-loader](https://github.com/standard/standard-loader).

## Usage
Try this example input:

```js
// code not conforming to standard style

module.exports = function(a,b) {
    console.log( a, b);
}
```
