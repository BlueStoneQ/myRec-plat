/**
 * webpack中dev和prod两种模式公用的配置
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config');

// 基础路径
const ROOT_PATH = config.ROOT_PATH;
const SRC_PATH = config.SRC_PATH;
const BUILD_PATH = config.BUILD_PATH;

module.exports = {
  // mode: 'development',
  context: path.resolve(__dirname, ROOT_PATH),
  entry: {
    main: path.resolve(SRC_PATH, 'index.js')
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash:8].bundle.js'
  },
  module: {},
  plugins: [
    // https://github.com/jantimon/html-webpack-plugin#configuration
    new HtmlWebpackPlugin()
  ]
}