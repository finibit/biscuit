const path = require('path')

module.exports = {
	entry: './src/index.js',
	devtool: 'hidden-source-map',

	output: {
		path: path.resolve(__dirname, 'lib/'),
		publicPath: '',
		filename: 'index.js',
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
}
