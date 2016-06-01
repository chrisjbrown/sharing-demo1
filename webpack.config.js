var webpack               = require('webpack');
var path                  = require('path');
var APP                   = path.join(__dirname, 'js');
var NPM                   = path.join(__dirname, 'node_modules');

var defaults = {
    context: APP,
    entry: './entry.js',
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'bundle.js',
        sourceMapFilename: '[name].js.map',
        publicPath: '/dist/',
    },
    devtool: 'source-map',
    debug: true,
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                include: __dirname,
                query: {
                    presets: ['es2015', 'stage-1', 'react'],
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: "'development'",
            },
        }),
    ],
    resolve: {
        root: [
          APP,
          NPM,
        ],
        extensions: ['', '.js'],
        alias: {
            vendor: path.resolve(__dirname, NPM),
            base: path.resolve(__dirname, APP),
        },
    },
};

module.exports = defaults;
