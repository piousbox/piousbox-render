
const path = require('path')

module.exports = {
  entry: './src/scaffold.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
}

