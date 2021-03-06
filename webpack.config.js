"use strict";

var webpack           = require('webpack');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR      = path.resolve(__dirname, 'build/public');
var CLIENT_DIR     = path.resolve(__dirname, 'src/client');
var COMPONENTS_DIR = path.resolve(__dirname, 'src/client/components');

var extractCSS 	      = new ExtractTextPlugin('style.css');
var extractWidgetsCSS = new ExtractTextPlugin('widgets.css');

var config = {
	devtool: 'eval',
	devServer: { hot: true },
	entry: COMPONENTS_DIR + '/index.jsx',
	eslint: {
    	configFile: '.eslintrc'
  	},
	module: {
		preLoaders: [
			{
				test: [/\.js$/, /\.jsx$/],
				loaders: [
					'eslint-loader'
				],
				exclude: [/node_modules/, /build/]
			}
		],
		loaders: [
			{
				test: [/\.js$/, /\.jsx$/],
				loaders: [
					'babel'
				],
				exclude: [/node_modules/, /build/]
			},
			{
				test: /\.css$/,
				loader: extractCSS.extract(
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
				),
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: extractWidgetsCSS.extract('css-loader'),
				exclude: [/src/]
			},
			{
				test: [/\.svg.*/, /\.gif.*/, /\.eot.*/, /\.woff.*/, /\.ttf.*/],
				loader: 'file-loader'
			}
		]
	},
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	postcss: function (webpack) {
        return [
        	require('precss'),
        	require('postcss-simple-vars'),
        	require('postcss-import')({
        		addDependencyTo: webpack
        	}),
        	require('autoprefixer')
        ];
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/index.html'
		}),
		extractWidgetsCSS,
		extractCSS,
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		alias: {
			constants$: CLIENT_DIR + '/constants/constants.js',
			store$: CLIENT_DIR + '/store/store.js',
			utils$: CLIENT_DIR + '/utils/utils.js'
		}
	}
};

module.exports = config;