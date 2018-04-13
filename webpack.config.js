var path = require('path');

module.exports = {
	entry: ['babel-polyfill', './dev/index.js'],
	output: {
		path: path.join(__dirname, 'src'),
		filename: 'bundle.min.js'
	},
	module: {
		loaders: [
			{
				test: /(\.js|.jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ["es2015", "react"],
					plugins: [
						"transform-decorators-legacy",
						"transform-do-expressions",
						"transform-class-properties",
						"transform-object-rest-spread"
					]
				}
			},
			{
				test: /(\.css|\.scss)$/,
				exclude: /flexboxgrid/,
				loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=public/fonts/[name].[ext]'
			},
			{
				test: /\.(jpe?g|png|gif|ico)$/i,
				loader: 'file-loader?name=[name].[ext]'
			},
			{test: /\.flow$/, loader: 'ignore-loader'},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules',
				include: /flexboxgrid/
			}
		]
	},
	devServer: {
		host: 'localhost',
		port: 8080,
		inline: true,
		publicPath: "/",
		contentBase: './src',
		historyApiFallback: true
	}
}
