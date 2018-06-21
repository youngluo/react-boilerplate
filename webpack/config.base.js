const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageInfo = require('../package.json');
const host = require('../api.config');
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
const curHost = _.mapValues(host[process.env.API_ENV], value => JSON.stringify(value));

module.exports = isBuild => ({
  entry: {
    app: ENTRY_FILE,
    vendor: [
      'react-router-dom',
      'babel-polyfill',
      'react-redux',
      'redux-thunk',
      'prop-types',
      'react-dom',
      'axios',
      'redux',
      'react',
      'antd'
    ]
  },
  output: {
    path: BUILD_PATH,
    filename: `js/[name].[${isBuild ? 'chunkhash' : 'hash'}:8].js`,
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: 'babel-loader'
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
        test: /\.less$/,
        use: isBuild
          ? [MiniCssExtractPlugin.loader, 'css-loader?minimize=true', 'postcss-loader', 'less-loader']
          : ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(eot|woff|ttf|woff2)(\?|$)/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.jsx$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: ['jsx-loader', 'babel-loader']
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
      __HOST__: curHost
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    alias: {
      containers: path.resolve(APP_PATH, 'containers'),
      components: path.resolve(APP_PATH, 'components'),
      config: path.resolve(APP_PATH, 'config'),
      pages: path.resolve(APP_PATH, 'pages'),
      utils: path.resolve(APP_PATH, 'utils'),
      UI: 'antd'
    }
  }
});
