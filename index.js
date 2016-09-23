let webpack = require('webpack');
let webpackDevServer = require('webpack-dev-server');
let webpackConfig = require('./webpack.config.prod');

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//proccess information
var env = process.env.USER_ENV;

/*webpack*/
webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:9000/', 'webpack/hot/dev-server');


if (env === 'dev') {
    let compiler = webpack(webpackConfig);
    let jsServer = new webpackDevServer(compiler, {
        hot: true,
        contentBase: './build/',
        quiet: false,
        stats: {
          colors: true
        }
    });

    jsServer.listen(9000, 'localhost', function() {
        console.error('Front-end listen: localhost:9000');
    });
}
else {
    webpack(webpackConfig, function() {
        console.error('bundle created');
    });
}

/*express*/
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

let port = process.env.PORT || 9001;
let apiModule = require('./server/api');

app.use('/api', apiModule);

app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:9000'
    });
});

app.listen(port, '0.0.0.0', function() {
	console.error('Back-end listen: localhost:' + port);
});