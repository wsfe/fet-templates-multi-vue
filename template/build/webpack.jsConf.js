var path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = function (config) {
  return {
    module: {
      rules: [
        {
          test: /\.(js)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [resolve('src')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: resolve('.cache/babel-loader')
          },
          include: [resolve('src')]
        }
      ]
    }
  };
};
