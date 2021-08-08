const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: 'advanced'
        }
      })
    ]
  }
})