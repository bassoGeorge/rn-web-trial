const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = env => ({
	module : {
		rules: [{
			test: /\.html$/,
			use : [{
				loader : 'html-loader',
				options: {
					interpolate: true
				}
			}]
		}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/public/index.html",
			filename: "./index.html",
		})
	]
})
