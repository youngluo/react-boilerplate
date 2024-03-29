const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const path = require('path')
const packageInfo = require('../package.json')

const { name: appName } = packageInfo
const ROOT_PATH = path.resolve(__dirname, '../')
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const ENTRY_FILE = path.resolve(APP_PATH, 'index')
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist')
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules')
const TEMPLATE_FILE = path.resolve(APP_PATH, 'index.ejs')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: ENTRY_FILE,
  output: {
    path: BUILD_PATH,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: [
          {
            loader: 'babel-loader', // 使用 babel 编译 ts，也可用 ts-loader
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                auto: /.*(?<!\.global\.s?css)$/i,
                localIdentName: isProduction
                  ? '[hash:base64:8]'
                  : '[path][name]__[local]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|webp|eot|woff|ttf|woff2)$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(BUILD_PATH, 'index.html'),
      template: TEMPLATE_FILE,
      title: appName,
      hash: false
    }),
    new WebpackBar()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          chunks: 'all',
          name: 'common',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@/containers': path.resolve(APP_PATH, 'containers'),
      '@/components': path.resolve(APP_PATH, 'components'),
      '@/config': path.resolve(APP_PATH, 'config'),
      '@/pages': path.resolve(APP_PATH, 'pages'),
      '@/utils': path.resolve(APP_PATH, 'utils')
    }
  }
}
