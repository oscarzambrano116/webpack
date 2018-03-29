const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
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
          use: 'css-loader'
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        }),
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'stylus-loader',
              options: {
                use: [
                  require('nib'),
                  require('rupture')
                ],
                import: [
                  '~nib/lib/nib/index.styl',
                  '~rupture/rupture/index.styl'
                ]
              }
            }
          ]
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
  ]
}
