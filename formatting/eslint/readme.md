# ESLint
> Lint your code with [ESLint](http://eslint.org/)

*Extend the [JavaScript Babel](https://github.com/mrmartineau/webpack-recipes/blob/master/javascript/babel/webpack.config.babel.js) config.*

```
npm install --save-dev babel-loader babel-preset-env babel-core eslint-loader eslint babel-eslint
```

```diff
  // webpack.config.babel.js
  module.exports = {
    module: {
      rules: [
+       {
+         enforce: 'pre',
+         test: /\.js$/,
+         exclude: /node_modules/,
+         loader: 'eslint-loader',
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

Find out all the other config options for the [eslint-loader](https://github.com/MoOx/eslint-loader).

## ESLint config
The ESLint config is added to a new `.eslintrc` file in the root of the project. We are using babel to parse the code and ESLint's recommended settings. If you need to know about more config options, please visit the [ESLint website](http://eslint.org/).

```json
{
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true
  }
}
```

## Usage
Try this example input:

```js
// code not conforming to standard style

module.exports = function(a,b) {
    console.log( a, b);
}
```
