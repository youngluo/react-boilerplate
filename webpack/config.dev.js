const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    compress: true,
    stats: {
      preset: 'minimal',
      timings: false
    },
    port: 8080,
    open: true,
    hot: true
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin()
  ]
})