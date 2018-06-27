const configBase = require('./config.base');
const webpack = require('webpack');
const _ = require('lodash');

const baseConfig = configBase(false); // dev

baseConfig.plugins = baseConfig.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
]);

module.exports = _.merge(baseConfig, {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true
  },
  output: {
    publicPath: '/'
  }
});
