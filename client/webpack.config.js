const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  test: /\.(jpeg|png|ico)$/,
  loader: 'file-loader',
  options: {
    publicPath: './',
    name: '[name].[ext]',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
    }),
  ],
}
