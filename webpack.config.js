var webpack = require('webpack');
var SplitByNamePlugin = require('split-by-name-webpack-plugin');

var config = {
    context: __dirname,
    entry: './index.ts',
    output: {
        filename: "[name].js",
        chunkFilename: "[name].js"
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
                loader:'ng-annotate!babel!ts',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader:'ng-annotate!babel',
                exclude: /node_modules/
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
    },
    devServer: {
      proxy: {
        '/api*': {
          target: 'http://localhost:8081',
          secure: false
        }
      }
    }
};

if(process.env.NODE_ENV === 'production'){
  // Changing the output path to /dist
  config.output.path = __dirname + '/dist';

  // split the production into 2 chunks, the app and the vendor code
  config.plugins.push(
    new SplitByNamePlugin({
      buckets: [{
        name: 'vendor',
        regex: /node_modules/
      }, {
        name: 'app',
        regex: /app/
      }]
    }));

  // uglify the app code
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    exclude: [
      'vendor.js'
    ],
    compress: {warnings: false}
  }));
}

module.exports = config;