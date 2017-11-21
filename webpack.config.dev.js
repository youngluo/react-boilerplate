const configBase = require('./webpack.config.base');
const webpack = require('webpack');
const _ = require('lodash');

const baseConfig = configBase(false); // dev

baseConfig.plugins = baseConfig.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
]);

module.exports = _.merge(baseConfig, {
  devtool: 'source-map',
  output: {
    publicPath: '/'
  }
});
