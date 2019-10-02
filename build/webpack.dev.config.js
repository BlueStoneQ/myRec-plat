/**
 * webpack配置 - development模式
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const config = require('./config');

// 基础路径
const ROOT_PATH = config.ROOT_PATH;
const SRC_PATH = config.SRC_PATH;

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(SRC_PATH),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, 
    ]
  },
  plugins: [
    // https://www.webpackjs.com/guides/hot-module-replacement/#启用-hmr
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // HMR https://webpack.docschina.org/plugins/hot-module-replacement-plugin/
    new webpack.HotModuleReplacementPlugin(),
    // https://www.webpackjs.com/plugins/no-emit-on-errors-plugin/
    new webpack.NoEmitOnErrorsPlugin()
  ]
});