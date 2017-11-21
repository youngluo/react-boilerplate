const config = require('./webpack.config.dev.js');
const webpack = require('webpack');
const express = require('express');

const compiler = webpack(config);
const app = express();

const port = 3000;
const url = `http://localhost:${port}`;


app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.redirect(url);
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err); // eslint-disable-line
  }

  return console.log(`Listening at ${url}`); // eslint-disable-line
});
