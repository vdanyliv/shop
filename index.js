let webpack = require('webpack');
let webpackDevServer = require('webpack-dev-server');
let gutil = require("gulp-util");
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
        contentBase: './build/',
        historyApiFallback: true,
        hot: true,
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
    webpack(webpackConfigProd, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log('[webpack:build]', stats.toString({
            chunks: false,
            colors: true
        }));
    });
}

/*express*/
if (env === 'dev') {
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
    
    app.set('port', (process.env.PORT || 9001));
}

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

let apiModule = require('./server/api');
app.use('/api', apiModule);

if (env === 'prod') {
    app.set('port', (process.env.PORT || 9000));
    app.use(express.static(__dirname + '/build/'));
    
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/build/index.html');
    });
}

app.listen(app.get('port'), function() {
    console.error('listening port: ' + app.get('port'));
});