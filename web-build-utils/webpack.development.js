//const DashboardPlugin = require('webpack-dashboard/plugin')
//const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = env => ({
	devServer: {
		stats             : "errors-only",
		host              : process.env.HOST, // Defaults to `localhost`
		port              : process.env.PORT, // Defaults to 8080
		open              : false,
		overlay           : true,
		historyApiFallback: true,
		proxy             : {
			'/api': {
				target     : env.e2e ? 'http://cl-api:8080/api' : 'http://localhost:3000',
				pathRewrite: {'^/api': ''}
			}
		}
	},
	plugins  : [
		//new WriteFilePlugin(),
		//new DashboardPlugin()
	]
})
