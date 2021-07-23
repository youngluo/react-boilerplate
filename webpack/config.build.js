const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const configBase = require('./config.base');
const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = configBase(true); // build

module.exports = merge(baseConfig, {
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new BundleAnalyzerPlugin()
  ]
});
