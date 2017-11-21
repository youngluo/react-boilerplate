const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname); // 项目根目录
const APP_PATH = path.resolve(ROOT_PATH, 'src'); // 项目源代码目录
const ENTRY_FILE = path.resolve(APP_PATH, 'index'); // 入口文件地址
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist'); // 发布文件存放目录
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules'); // node_modules目录
const TEMPLATE_FILE = path.resolve(APP_PATH, 'index.html'); // html模板文件地址
// CSS_SCOPE = 'modules&localIdentName=[name]__[local]___[hash:base64:6]';

module.exports = isProd => ({
  entry: {
    app: isProd ? ENTRY_FILE : ['webpack-hot-middleware/client', ENTRY_FILE],
    vendor: [
      'react-router-dom',
      'babel-polyfill',
      'react-redux',
      'redux-thunk',
      'react-dom',
      'axios',
      'redux',
      'react',
      'antd'
    ]
  },
  output: {
    path: BUILD_PATH, // 编译到当前目录
    filename: 'js/[name].[chunkhash:8].js', // 编译后的文件名字
    chunkFilename: '[name].[chunkhash:8].js'
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
        use: isProd
          ? ExtractTextPlugin.extract(['css-loader?minimize=true', 'postcss-loader'])
          : ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: isProd
          ? ExtractTextPlugin.extract(['css-loader?minimize=true', 'postcss-loader', 'less-loader'])
          : ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: isProd
          ? ExtractTextPlugin.extract(['css-loader?minimize=true', 'postcss-loader', 'sass-loader'])
          : ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(eot|woff|ttf|woff2)(\?|$)/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
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
            limit: 8192, // limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
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
      // 根据模板插入css/js等生成最终HTML
      filename: path.resolve(BUILD_PATH, 'index.html'), // 生成的html存放路径
      template: TEMPLATE_FILE, // html模板路径
      hash: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'], // 后缀名自动补全
    alias: {
      containers: path.resolve(APP_PATH, 'containers'),
      components: path.resolve(APP_PATH, 'components'),
      config: path.resolve(APP_PATH, 'config'),
      pages: path.resolve(APP_PATH, 'pages'),
      ui: 'antd'
    }
  }
});
