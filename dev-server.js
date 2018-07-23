var util = require('util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var opn = require('opn');
var pkg = require('./package.json');

var port = pkg.config.devPort;
var host = pkg.config.devHost;

var config = require('./webpack/config')

var server = new WebpackDevServer(webpack(config), { contentBase: './dist' })

server.listen(port, host, function (err) {
  if (err) { console.log(err); }
  var url = util.format('http://%s:%d', host, port);
  console.log('Listening at %s', url);
  // opn(url);
});
