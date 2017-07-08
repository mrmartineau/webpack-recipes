const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    })
  ],
}
