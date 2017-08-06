const webpack = require('webpack');
const fs = require('fs');
const {root} = require('./helpers');



const nodeModules = {};

fs.readdirSync('node_modules')
	.filter(x => ['.bin'].indexOf(x) === -1)
	.forEach(mod => nodeModules[mod] = 'commonjs ' + mod);




const config = {};


config.entry = root('src/app.ts');


config.target = 'node';


config.node = {
	__dirname: true
};


config.output = {
	path: root('dist'),
	filename: 'app.js',
	devtoolModuleFilenameTemplate: '[absolute-resource-path]',
	devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
};


config.resolve = {
	extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
};


config.module = {
	rules: [
		{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: 'awesome-typescript-loader'
		}
	]
}


config.externals = nodeModules;


config.devtool = 'source-map';



module.exports = config;