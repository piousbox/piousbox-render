var path = require('path');
var util = require('util');
var autoprefixer = require('autoprefixer-core');
var pkg = require('../package.json');

var loaders = require('./loaders');
var plugins = require('./plugins');

var DEBUG = process.env.NODE_ENV === 'development';
var TEST = process.env.NODE_ENV === 'test';

var jsBundle = path.join('js', util.format('[name].%s.js', pkg.version));

var entry = {}
if (DEBUG) {
  entry.app = ['./scaffold.jsx']
  entry.app.push( util.format( 'webpack-dev-server/client?http://%s:%d', pkg.config.devHost, pkg.config.devPort));
  entry.app.push('webpack/hot/dev-server');
} else {
  entry.app = ['./index.jsx']
}

var config = {
  context: path.join(__dirname, '../src'),
  cache: DEBUG,
  debug: DEBUG,
  target: 'web', 
  devtool: DEBUG || TEST ? 'inline-source-map' : false,
  entry: entry,
  output: {
    path: path.resolve(pkg.config.buildDir),
    publicPath: pkg.config.asset_path[process.env.NODE_ENV],
    filename: jsBundle,
    pathinfo: false,
  },
  module: {
    loaders: loaders
  },
  postcss: [
    autoprefixer
  ],
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: [ 'node_modules', 'config/'+process.env.NODE_ENV ]
  },
  devServer: {
    contentBase: path.resolve(pkg.config.buildDir),
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    inline: true,
    stats: { colors: true },
    disableHostCheck: true
  }
}

if (process.env.NODE_ENV === 'production') {
  config.output.libraryTarget = 'commonjs2';
  config.output.libraryTarget = 'umd';
  config.output.library = 'piousbox-render';
  config.externals = { react: 'commonjs react' };
}

console.log('+++ config:', config)

module.exports = config;
