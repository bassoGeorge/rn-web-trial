const CopyPlugin = require('copy-webpack-plugin');
const path       = require('path')

module.exports = ({mode}) => ({
	entry       : {
		main: [
			'./index.web.js',
			//'./app/scss/style.scss'
		]
		// Using an array creates just 1 .js file for all of the items.
		// Since we have scss, it will be extracted into separate file and linked by miniCssExtractPlugin
	},
	output      : {
		filename  : mode === 'production'
			? "[name]-[chunkhash].js"
			: "[name].js",
		publicPath: '/'
	},
	resolve     : {
		alias: {
			// app: path.resolve(__dirname, './app') // add shortcuts for paths like this
		}
	},
	plugins     : [
		new CopyPlugin([
			{from: '.src/public'},
		]),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				node_vendors: {
					test    : /[\\/]node_modules[\\/]/,
					chunks  : "all",
					priority: 1
				}
			}
		}
	}
})
