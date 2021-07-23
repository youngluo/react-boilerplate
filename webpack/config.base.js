const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageInfo = require('../package.json');
const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');

const { name: appName } = packageInfo;
const ROOT_PATH = path.resolve(__dirname, '../'); // 项目根目录
const APP_PATH = path.resolve(ROOT_PATH, 'src'); // 项目源代码目录
const ENTRY_FILE = path.resolve(APP_PATH, 'index'); // 入口文件地址
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist'); // 发布文件存放目录
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules'); // node_modules目录
const TEMPLATE_FILE = path.resolve(APP_PATH, 'index.ejs'); // html模板文件地址

module.exports = isBuild => ({
  mode: 'production',
  entry: {
    app: ENTRY_FILE
  },
  output: {
    path: BUILD_PATH,
    filename: `js/[name].[contenthash].js`,
    chunkFilename: 'js/[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: isBuild
          ? [MiniCssExtractPlugin.loader, 'css-loader?minimize=true', 'postcss-loader']
          : ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: isBuild
          ? [MiniCssExtractPlugin.loader, 'css-loader?minimize=true', 'postcss-loader', 'sass-loader']
          : ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
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
      __APP_NAME__: JSON.stringify(appName),
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@containers': path.resolve(APP_PATH, 'containers'),
      '@components': path.resolve(APP_PATH, 'components'),
      '@config': path.resolve(APP_PATH, 'config'),
      '@pages': path.resolve(APP_PATH, 'pages'),
      '@util': path.resolve(APP_PATH, 'utils'),
    }
  }
});