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
          include: [resolve('src')],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [[require.resolve('@babel/preset-env'),{
                "modules": false,
                "targets": {
                  "browsers": [
                    "> 1%",
                    "last 2 versions",
                    "not ie <= 8"
                  ]
                }
              }]],
              plugins: [require.resolve('@babel/plugin-transform-runtime')],
              cacheDirectory: true
            }
          }
        }
      ]
    }
  };
};
