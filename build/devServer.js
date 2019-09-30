/**
 * 自定义本地服务器
 * 1. 服务于开发阶段的调试
 * 2. 支持热刷新（HMR）
 * 3. 支持同局域网移动端设备无线联调（https://juejin.im/post/5d9181e0e51d4578414c439e）
 */
const webpack = require('webpack');
const express = require('express');
const WebpackDevMiddleWare = require('webpack-dev-middleware');
const config = require('./config.js');
const open = require('open');
const chalk = require('chalk');
const ip = require('ip');
const webpackConfig = require('./webpack.dev.config.js');

const PORT = config.PORT;
const URL = `http://localhost:${PORT}`;
const ipURL = `http://${ip.address()}:${PORT}`;

const compiler = webpack(webpackConfig);

const devMiddle = WebpackDevMiddleWare(compiler, {

});

const app = express();

app.use(devMiddle);

app.listen(PORT);

// webpack编译完成后回调
devMiddle.waitUntilValid(() => { 
  console.log(chalk.cyan(`Local: ${URL}`));
  console.log(chalk.cyan(`On Your Network: ${ipURL}`));
  open(URL);
});