import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import paths from './paths';
import rules from './rules';

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
	entry: paths.entryPath,
	module: {
		rules
	},
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['*', '.js', '.scss', '.css']
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.templatePath,
			minify: {
				collapseInlineTagWhitespace: true,
				collapseWhitespace: true,
				preserveLineBreaks: true,
				minifyURLs: true,
				removeComments: true,
				removeAttributeQuotes: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
		})
	],
	output: {
		publicPath: ASSET_PATH
	}
};