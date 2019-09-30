/**
 * webpack中dev和prod两种模式公用的配置
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('./config');

// 基础路径
const ROOT_PATH = config.ROOT_PATH;
const SRC_PATH = config.SRC_PATH;
const BUILD_PATH = config.BUILD_PATH;

module.exports = {
  context: path.resolve(__dirname, ROOT_PATH),
  entry: {
    main: [path.resolve(SRC_PATH, 'index.js')]
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash:8].bundle.js'
  },
  resolve: {
    alias: {
      '$public': path.resolve(ROOT_PATH, 'public'),
      '$src': path.resolve(SRC_PATH),
      '$views': path.resolve(SRC_PATH, 'views'),
      '$components': path.resolve(SRC_PATH, 'components'),
      '$config': path.resolve(SRC_PATH, 'config'),
      '$utils': path.resolve(SRC_PATH, 'utils'),
      '$redux': path.resolve(SRC_PATH, 'redux'),
      '$mock': path.resolve(SRC_PATH, 'mock'),
      '$services': path.resolve(SRC_PATH, 'services')
    },
    extensions: [ '.js', '.jsx', '.json' ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(SRC_PATH),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        include: path.resolve(SRC_PATH),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(jpe?g|png|gif|svg)$/,
        include: path.resolve(ROOT_PATH, 'public', 'assets', 'images'),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 8, // 图片小于8kb 打包为base64
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // https://github.com/jantimon/html-webpack-plugin#configuration
    new HtmlWebpackPlugin({
      filename: 'index.html', // 输出html的名称
      template: path.resolve(ROOT_PATH, 'public', 'index.ejs'),
      templateParameters: {
        title: 'myRec'
      }
    }),
    // https://www.npmjs.com/package/clean-webpack-plugin
    new CleanWebpackPlugin()
  ]
};