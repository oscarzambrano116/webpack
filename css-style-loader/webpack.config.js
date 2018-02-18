const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // loaders
      {
        // test: file type to be recognized
        // use: loader in charge
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
