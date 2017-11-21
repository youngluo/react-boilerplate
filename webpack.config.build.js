const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const configBase = require('./webpack.config.base');
const webpack = require('webpack');

const baseConfig = configBase(true); // build

baseConfig.plugins = baseConfig.plugins.concat([
  new CleanWebpackPlugin(['./dist'], { verbose: true }),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false // 移除所有注释
    },
    compress: {
      warnings: false,
      drop_console: true
    }
  }),
  new ExtractTextPlugin({
    filename: 'css/[name].[chunkhash:8].css',
    allChunks: true
  }),
  new BundleAnalyzerPlugin()
]);

module.exports = baseConfig;
