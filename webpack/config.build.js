const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const configBase = require('./config.base');
const path = require('path');

const baseConfig = configBase(true); // build

baseConfig.plugins = baseConfig.plugins.concat([
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../'),
    verbose: true
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css?v=[contenthash:8]'
  }),
  new BundleAnalyzerPlugin()
]);

module.exports = baseConfig;
