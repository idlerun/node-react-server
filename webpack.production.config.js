'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  performance: { hints: false },

  entry: [
   'babel-polyfill',
    path.join(__dirname, 'src/client/index.js')
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[hash].min.js',
    publicPath: '/'
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          sourceMap: false,
          compress: {
            warnings: false
          },
          ie8: false,
          output: {
            comments: false
          }
        }
      })
    ]
  },

  plugins: [
    new CopyWebpackPlugin([{ from: 'src/public', to: '' }]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  module: {
    rules: [
      { test: /\.(png|gif|jpg)$/, loader: 'url-loader' },
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.sass$/, loaders: ["style-loader", "css-loader", "sass-loader"], include: /src/ },
      { test: /\.(txt|md)$/, loader: 'raw-loader' }
    ]
  }
};
