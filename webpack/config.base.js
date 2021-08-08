const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const webpack = require('webpack')
const path = require('path')
const packageInfo = require('../package.json')

const { name: appName } = packageInfo
const ROOT_PATH = path.resolve(__dirname, '../') // 项目根目录
const APP_PATH = path.resolve(ROOT_PATH, 'src') // 项目源代码目录
const ENTRY_FILE = path.resolve(APP_PATH, 'index') // 入口文件地址
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist') // 发布文件存放目录
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules') // node_modules目录
const TEMPLATE_FILE = path.resolve(APP_PATH, 'index.ejs') // html模板文件地址

module.exports = {
  entry: {
    app: ENTRY_FILE
  },
  output: {
    path: BUILD_PATH,
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js'
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                auto: /.*(?<!\.global\.s?css)$/i,
                localIdentName: process.env.NODE_ENV === 'production' ? '[hash:base64]' : '[path][name]__[local]'
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
      title: appName,
      filename: path.resolve(BUILD_PATH, 'index.html'),
      template: TEMPLATE_FILE,
      hash: false
    }),
    new webpack.DefinePlugin({
      __APP_NAME__: JSON.stringify(appName)
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ForkTsCheckerWebpackPlugin(), // 使用 babel 编译 ts 时，增加类型检测
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new WebpackBar()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        common: {
          name: 'common',
          minChunks: 2,
          priority: 0,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          minChunks: 2,
          priority: 1
        }
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@/containers': path.resolve(APP_PATH, 'containers'),
      '@/components': path.resolve(APP_PATH, 'components'),
      '@/config': path.resolve(APP_PATH, 'config'),
      '@/pages': path.resolve(APP_PATH, 'pages'),
      '@/utils': path.resolve(APP_PATH, 'utils')
    }
  }
}