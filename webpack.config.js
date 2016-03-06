var webpack = require('webpack');
var SplitByNamePlugin = require('split-by-name-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

var config = {
  context: __dirname,
  entry: './index.ts',
  output: {
    filename: "[name].js?[hash]",
    chunkFilename: "[name].js?[hash]"
  },
  plugins: [
    new webpack.DefinePlugin({
      ON_PROD: process.env.NODE_ENV === 'production'
    }),
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],
  devtool: 'devtool',
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
        loader:'style!css!postcss'
      },
      {
        test: /\.scss/,
        loader:'style!css!postcss!sass'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
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

if(process.env.NODE_ENV !== 'test'){
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
}

if(process.env.NODE_ENV === 'production'){
  // Changing the output path to /dist
  config.output.path = __dirname + '/dist';
  config.devtool = 'source-map';

  // uglify the app code
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false},
    sourceMap: false
  }));
}

module.exports = config;