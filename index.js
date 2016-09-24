let webpack = require('webpack');
let webpackDevServer = require('webpack-dev-server');
let webpackConfigProd = require('./webpack.config.prod');
let webpackConfigDev = require('./webpack.config.dev');

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//proccess env
var env = process.env.USER_ENV;

/*webpack*/
if (env === 'dev') {
    webpackConfigDev.entry.app.unshift('webpack-dev-server/client?http://localhost:9000/', 'webpack/hot/dev-server');
    let compiler = webpack(webpackConfigDev);
    let jsServer = new webpackDevServer(compiler, {
        hot: true,
        contentBase: './build/',
        quiet: false,
        stats: {
          colors: true
        }
    });

    jsServer.listen(9000, '0.0.0.0', function() {
        console.error('Front-end listen: localhost:9000');
    });
}
else {
    webpack(webpackConfigProd, function() {
        console.error('bundle created');
    });
}

/*express*/

if (env === 'prod') app.use(express.static('./build/'));
if (env === 'dev') {
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
}
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

let port = process.env.PORT || env !== 'prod' ? 9001 : 9000;
let apiModule = require('./server/api');

app.use('/api', apiModule);

app.listen(port, '0.0.0.0', function() {
	console.error('Back-end listen: localhost:' + port);
});