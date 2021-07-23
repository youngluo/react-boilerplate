const configBase = require('./config.base');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = configBase(false); // dev

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 8080,
    hot: true
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});