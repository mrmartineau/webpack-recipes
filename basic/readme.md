# Basic example
> Bundle Javascript

```
npm install --save-dev webpack
```

```js
// webpack.config.babel.js
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
`import` a Javascript file relative to your javascript module

```js
// index.js
import foo from './foo';

foo();

// foo.js
export default function foo() {
  console.log('foo')
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

