var webpack = require('webpack')
var path = require('path')
var HtmlPack = require('html-webpack-plugin')
var merge = require('webpack-merge')
var Copy = require('copy-webpack-plugin');

var TARGET = process.env.npm_lifecycle_event

var common = {
  entry: './src/client/index.js',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], include: /src/ },
      { test: /\.css$/, loaders: ['style', 'css'], exclude: /node_modules/ },
      { test: /\.s(a|c)ss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap&indentedSyntax"], include: /src/ }
    ]
  }, 
  plugins: [
    new HtmlPack({
      template: 'src/index.html',
      inject: 'body'
    }),
    new Copy([{ from: 'src/public' }])
  ]
}

if(TARGET === 'dev' || !TARGET) {
  module.exports = merge(common, {
    output: {
      path: './public',
      filename: 'bundle.js'
    },
    devtool: 'eval-source-map'
  })
} else if (TARGET === 'build') {
  module.exports = merge(common, {
    output: {
      path: './public',
      filename: '[chunkhash].js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          // This affects react lib size
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
