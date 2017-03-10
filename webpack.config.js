let path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'), //css单独打包
    HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname), //项目根目录
    APP_PATH = path.resolve(ROOT_PATH, 'src'), //项目源代码目录
    BUILD_PATH = path.resolve(ROOT_PATH, 'dist'), //发布文件存放目录
    NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules'), //node_modules目录
    ENTRY_FILE = path.resolve(APP_PATH, 'index'), //入口文件地址
    TEMPLATE_FILE = path.resolve(APP_PATH, 'index.html'); //html模板文件地址

module.exports = function (env) {
    let production = env ? env.production : false;

    return {
        devtool: 'source-map',
        entry: {
            app: ENTRY_FILE
        },
        output: {
            //publicPath: 'dist', //编译好的文件，在服务器的路径,这是静态资源引用路径
            path: BUILD_PATH, //编译到当前目录
            filename: 'js/[name].[hash:8].js', //编译后的文件名字
            chunkFilename: '[name].[chunkhash:8].js',
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: NODE_MODULES_PATH,
                use: 'babel-loader',
                include: APP_PATH
            }, {
                test: /\.css$/,
                exclude: NODE_MODULES_PATH,
                use: ExtractTextPlugin.extract(['css-loader', 'autoprefixer-loader']),
                include: APP_PATH
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract(['css-loader', 'autoprefixer-loader', 'less-loader']),
            }, {
                test: /\.scss$/,
                exclude: NODE_MODULES_PATH,
                use: ExtractTextPlugin.extract(['css-loader', 'autoprefixer-loader', 'sass-loader']),
                include: APP_PATH
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                exclude: NODE_MODULES_PATH,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                },
                include: APP_PATH
            }, {
                test: /\.(png|jpg)$/,
                exclude: NODE_MODULES_PATH,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192, //limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
                        name: 'images/[name].[hash:8].[ext]'
                    }
                },
                include: APP_PATH
            }, {
                test: /\.jsx$/,
                exclude: NODE_MODULES_PATH,
                use: ['jsx-loader', 'babel-loader'],
                include: APP_PATH
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
                filename: path.resolve(BUILD_PATH, 'index.html'), //生成的html存放路径
                template: TEMPLATE_FILE, //html模板路径
                hash: false,
            }),
            new ExtractTextPlugin('css/[name].[chunkhash:8].css')
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
        },
        devServer: {
            contentBase: BUILD_PATH,
            compress: true,
            port: 8000
        }
    }
}