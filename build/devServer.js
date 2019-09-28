const webpack = require('webpack');
const express = require('express');
const WebpackDevMiddleWare = require('webpack-dev-middleware');
const config = require('./config.js');
const open = require('open');
const webpackConfig = require('./webpack.dev.config.js');

const PORT = config.PORT;
const url = `http://localhost:${PORT}`;

const compiler = webpack(webpackConfig);

const devMiddle = WebpackDevMiddleWare(compiler, {

});

const app = express();

app.use(devMiddle);

app.listen(PORT, () => { 
  console.log('app listen on port 3002');
  open(url);
});