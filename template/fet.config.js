'use strict';

var path = require('path');
var merge = require('webpack-merge');
var webpackJsConfig = require('./build/webpack.jsConf');
var webpackCssConfig = require('./build/wepack.cssConf');

function resolve (dir) {
  return path.join(__dirname, dir)
}

exports.servers = require('./build/servers.conf');

exports.config = function () {
  return {
    webpackConfig: function webpackConfig (jsConfig, cssConfig, options, node_env) {
      jsConfig.resolve.alias = {
        '@': resolve('src')
      };
      jsConfig = merge(jsConfig, webpackJsConfig(jsConfig));
      cssConfig = merge(cssConfig, webpackCssConfig(cssConfig));

      return {
        jsConfig: jsConfig,
        cssConfig: cssConfig
      };
    },
    exports: [
      'styles/modules/pageA.scss',
      'scripts/modules/pageA/index.js'
    ]
  };
};
