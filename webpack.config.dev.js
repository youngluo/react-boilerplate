const configBase = require('./webpack.config.base');
const webpack = require('webpack');
const _ = require('lodash');

const baseConfig = configBase(false); // dev

baseConfig.plugins = baseConfig.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
]);

module.exports = _.merge(baseConfig, {
  devtool: 'source-map',
  output: {
    publicPath: '/'
  }
});
