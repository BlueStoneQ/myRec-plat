/**
 * webpack配置 - production模式
 */
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.config.js');
const config = require('./config');

// 基础路径
const ROOT_PATH = config.ROOT_PATH;
const SRC_PATH = config.SRC_PATH;

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(SRC_PATH),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development', // 根据当前运行环境 决定是否启用样式的热启动
              // if hmr does not work, this is a forceful method.
              reloadAll: true
            },
          }, 'css-loader', 'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'style/[name].[hash].css',
      chunkFilename: 'style/[id].[hash].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    // https://www.npmjs.com/package/clean-webpack-plugin
    new CleanWebpackPlugin()
  ],
});