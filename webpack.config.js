var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
	entry: {
		vendor: [],
		script: [./src/script.js]
	},
	output: {
		path: __dirname+"/dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.less$/, loader: 'style-loader!css-loader?sourceMap!less-loader?sourceMap'},
			{ test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
			{ test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
              loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
              loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
              loader: "file" },
            { test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
              loader: "url-loader?limit=10000&mimetype=image/svg+xml"},		
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: "body"
		}),
		new webpack.optimize.CommonsChunkPlugin("vendor"),
		new webpack.optimize.UglifyJsPlugin({compress: { warnings: false}}),
		new webpack.ResolverPlugin(
	        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
	    )
	],
	devServer: {
        contentBase: "./dist"
    },
    resolve: {
        modulesDirectories: ["node_modules", "bower_components"],
        extensions: ["", ".webpack.js", ".web.js", ".js", ".css", ".min.css"]
    },
    devtool: 'source-map'
};
