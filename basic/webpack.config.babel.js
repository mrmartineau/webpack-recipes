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
