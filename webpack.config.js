
const path = require('path');
const process = require('process');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: {
		vendor: [
				 'react-dom',
				 'font-awesome',
				 'imports?exports=>false&module=>false!react',
				 'imports?exports=>false&module=>false!jquery',
				 'imports?exports=>false&module=>false!webcom'
		],
		script: './src/script.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, './dist'),
		publicPath: process.env.PUBLIC_PATH || '/'
	},
	resolve: {
    	root: __dirname,
        alias: {
        	'webcom': 'webcom/webcom.js',
        	react: 'react/dist/react.min.js',
        	jquery: 'jquery/dist/jquery.min.js',
			'react-dom': 'react-dom/dist/react-dom.min.js',
			'font-awesome': 'font-awesome/css/font-awesome.min.css',
        },
        extensions: ["", ".webpack.js", ".web.js", ".js", ".css", ".min.css"]
    },
	module: {
		loaders: [
			{ test: /\.js/, loaders: ['babel'], exclude: /node_modules/ },
			{ test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
			{ test: /\.(eot|woff|woff2|ttf|svg|)(\?\S*)?$/,
			  loader: 'url?limit=100000&name=[name].[ext]'
			}	
		],
		noParse: [
			/react(:?\.min)?\.js$/,
			/jquery\.min\.js$/,
			/webcom\.js$/
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
		new webpack.DefinePlugin({
			__WEBCOM_SERVER__: JSON.stringify(process.env.WS_SERVER || 'https://webcom.orange.com'),
			__NAMESPACE__: JSON.stringify(process.env.NAMESPACE || 'legorange')
		})
	],
	progress: true,
	target: 'web'
};

if (process.env.NODE_ENV !== 'production') {
	config.entry.vendor = config.entry.vendor.concat([
		'./hotReload',
		'webpack/hot/dev-server'
	]);
	config.module.loaders = config.module.loaders.concat([
		{ test: /\.less$/, loader: 'style-loader!css-loader?sourceMap!less-loader?sourceMap'},
		{ test: /\.css$/,  loader: 'style-loader!css-loader?sourceMap' },
	]);
	config.devtool = 'eval-cheap-module-source-map';
	config.debug = true;
} else {
	config.plugins = config.plugins.concat([
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('[name].css')
	]);
	config.module.loaders = config.module.loaders.concat([
		{ test: /\.less/, loader: ExtractTextPlugin.extract(
			'style',
			'css-loader?sourceMap&minimize!less-loader?sourceMap'
		)},
		{ test: /\.css/, loader: ExtractTextPlugin.extract(
			'style',
			'css-loader?sourceMap&minimize!less-loader?sourceMap'
		)} 
	]);
	config.devtool = 'source-map';
	config.debug = false;
}

module.exports = config;

