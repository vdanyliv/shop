var webpack = require("webpack");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
        app: ['./app/main.js']
    },
	output: {
		path: __dirname + '/build',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            }
        ]
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: './app/tpl', to: './tpl' },
            { from: './app/index.html', to: './' }
        ])
    ]
};