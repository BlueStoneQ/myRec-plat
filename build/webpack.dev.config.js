/**
 * webpack配置 - development模式
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    // HMR https://webpack.docschina.org/plugins/hot-module-replacement-plugin/
    new webpack.HotModuleReplacementPlugin(),
    // https://www.webpackjs.com/plugins/no-emit-on-errors-plugin/
    new webpack.NoEmitOnErrorsPlugin()
  ]
});