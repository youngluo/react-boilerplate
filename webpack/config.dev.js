const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    compress: true,
    devMiddleware: {
      stats: {
        preset: 'minimal',
        timings: false
      }
    },
    // client: {
    //   overlay: false
    // },
    port: 8080
  },
  output: {
    publicPath: '/'
  },
  plugins: [new ReactRefreshWebpackPlugin({ overlay: false })]
})
