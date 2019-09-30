/**
 * 自定义本地服务器
 * 1. 服务于开发阶段的调试
 * 2. 支持热刷新（HMR）
 * 3. 支持同局域网移动端设备无线联调（https://juejin.im/post/5d9181e0e51d4578414c439e）
 */
const webpack = require('webpack');
const express = require('express');
const WebpackDevMiddleWare = require('webpack-dev-middleware');
const WebpackHotMiddleware = require("webpack-hot-middleware");
const config = require('./config.js');
const open = require('open');
const chalk = require('chalk');
const ip = require('ip');
const webpackConfig = require('./webpack.dev.config.js');

// webpack-hot-middleware 
// https://github.com/webpack-contrib/webpack-hot-middleware/blob/master/example/webpack.config.multientry.js
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

const PORT = config.PORT;
const PUBLIC_DIR = config.PUBLIC_DIR;
const URL = `http://localhost:${PORT}`;
const ipURL = `http://${ip.address()}:${PORT}`;

// HMR - 增加到entry 参照：https://www.npmjs.com/package/webpack-hot-middleware#installation--usage 
for (let key of Object.keys(webpackConfig.entry)) {
  webpackConfig.entry[key].push(hotMiddlewareScript);
}

const compiler = webpack(webpackConfig);

// webpack-dev-middleware instance
const devMiddle = WebpackDevMiddleWare(compiler, {
  // options
});

// webpack-hot-middleware instance
const hotMiddle = WebpackHotMiddleware(compiler, {
  // options
});

const app = express();

app.use(devMiddle);

app.use(hotMiddle);

// 设置访问静态文件的路径   http://www.expressjs.com.cn/starter/static-files.html
app.use('/static', express.static(PUBLIC_DIR));

// 启动gzip压缩
app.use(require('compression')());

module.exports = app.listen(PORT);

// webpack编译完成后回调
devMiddle.waitUntilValid(() => { 
  console.log(chalk.cyan(`Local: ${URL}`));
  console.log(chalk.cyan(`On Your Network: ${ipURL}`));
  open(URL);
});