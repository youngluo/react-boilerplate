const configBase = require('./webpack.config.base');
const webpack = require('webpack');

const baseConfig = configBase(true); // prod

baseConfig.plugins = baseConfig.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false // 移除所有注释
    },
    compress: {
      warnings: false,
      drop_console: true
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js/[name].[hash:8].js'
  })
]);

module.exports = baseConfig;
