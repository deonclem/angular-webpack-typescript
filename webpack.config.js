var webpack = require('webpack');

var config = {
    context: __dirname,
    entry: './index.ts',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_PROD: process.env.NODE_ENV === 'production'
        }),
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })

    ],
    devtool: 'source-map',
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader:'ng-annotate!babel!ts'
            },
            {
                test: /\.js$/,
                loader:'ng-annotate!babel'
            },
            {
                test: /\.html$/,
                loader:'raw'
            },
            {
                test: /\.css$/,
                loader:'style!css'
            },
            {
                test: /\.styl/,
                loader:'style!css!stylus'
            }
        ]
    }
};

if(process.env.NODE_ENV === 'production'){
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;