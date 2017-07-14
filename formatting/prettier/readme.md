# Prettier
> Run the Prettier code formatter on build/watch

*Extend the [JavaScript Babel](https://github.com/mrmartineau/webpack-recipes/blob/master/javascript/babel/webpack.config.babel.js) config.*

```
npm install --save-dev babel-loader babel-preset-env babel-core prettier prettier-loader
```

```diff
  // webpack.config.babel.js
  module.exports = {
    module: {
      rules: [
+       {
+         test: /\.js?$/,
+         enforce: 'pre',
+         loader: 'prettier-loader',
+         options: { /* prettier options */ }
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

## Prettier config
Prettier only provides a few options, find out about them [here](https://github.com/prettier/prettier#options)

```diff
 {
   test: /\.js?$/,
   enforce: 'pre',
   loader: 'prettier-loader',
-  options: { /* prettier options */ }
+  options: {
+    tabWidth: 2,
+    singleQuote: true,
+  }
 },
```

## Usage
Run `npm run watch` and add this to your Javascript code:

```js
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```
