let path = require('path'),
    webpack = require('webpack'),
    config = require('./webpack.config.dev.js'),
    compiler = webpack(config),
    express = require('express'),
    app = express();

let port = 3000,
    url = `http://localhost:${port}`;

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.redirect(url);
});

app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log(`Listening at ${url}`);
});