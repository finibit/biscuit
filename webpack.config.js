const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const outputPath = path.resolve(__dirname, 'lib/')

module.exports = {
	entry: './src/index.js',
	devtool: 'hidden-source-map',

	output: {
		path: outputPath,
		publicPath: '',
		filename: 'biscuit.js',
		libraryTarget: 'commonjs2',
		library: 'Biscuit',
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	externals: {
		react: 'commonjs react',
		'styled-components': {
			commonjs: 'styled-components',
			commonjs2: 'styled-components',
			amd: 'styled-components',
		},
	},

	plugins: [
		new CleanWebpackPlugin(outputPath),
	],
}
