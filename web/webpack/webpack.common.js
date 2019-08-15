const CopyPlugin = require('copy-webpack-plugin');
const path       = require('path');


const absProjectPath = process.cwd();
module.exports = ({mode}) => ({
	entry       : {
		main: [
			'./index.web.js',
			//'./app/scss/style.scss'
		],
		// Using an array creates just 1 .js file for all of the items.
		// Since we have scss, it will be extracted into separate file and linked by miniCssExtractPlugin
	},
	output      : {
		path      : path.resolve(absProjectPath, './web/build'),
		filename  : mode === 'production'
			? '[name]-[chunkhash].js'
			: '[name].js',
		publicPath: '/',
	},
	resolve     : {
		alias: {
			// app: path.resolve(process.cwd(), './src') // add shortcuts for paths like this
		},
	},
	plugins     : [
		new CopyPlugin([
			{from: path.resolve(absProjectPath, './web/public')},
		]),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				node_vendors: {
					test    : /[\\/]node_modules[\\/]/,
					chunks  : 'all',
					priority: 1,
				},
			},
		},
	},
});
