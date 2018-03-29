const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: path.resolve(__dirname, 'dist')+'/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['syntax-dynamic-import']
          },
        },
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/, // Types of images and fonts
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000, // images size (bytes)
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [ // Postcss configuration
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
              }
            },
            'postcss-loader'
          ]
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        }),
      },
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', {
            loader: 'less-loader',
            options: {
              noIecompat: true,
            }
          }]
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    // })
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ]
}
