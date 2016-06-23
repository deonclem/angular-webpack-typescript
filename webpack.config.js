var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

const extractCSS = new ExtractTextPlugin("app.css", {
  allChunks: true
});

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
    }),
    extractCSS
  ],
  devtool: 'eval',
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
        loader: extractCSS.extract(["css?minimize"])
      },
      {
        test: /\.scss/,
        loader: extractCSS.extract(["css?minimize!postcss!sass"])
      },
      {
        test: /\.(gif|jpeg|jpg|png|svg|ico|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file?name=[path][name].[ext]?[hash]"
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