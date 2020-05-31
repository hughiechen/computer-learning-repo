const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname,
		filename: "./release/bundle.js"
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: "./index.html"
		})
	],
	devServer: {
		contentBase: path.join(__dirname, './release'), //根目录
		open: true, //自动打开浏览器
		port: 8000,
		proxy: {
			'/api/*': {
				target: 'http://localhost:8888'
			}
		}
	}
}