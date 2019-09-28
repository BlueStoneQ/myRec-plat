/**
 * webpack配置 - production模式
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'production'
});