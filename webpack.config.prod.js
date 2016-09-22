module.export = {
	entry: './app/main.js',
	output: {
		path: './build',
		filename: 'app.bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};