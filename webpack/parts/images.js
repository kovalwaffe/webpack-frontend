const environment = require('./enviroment');

exports.images = () => ({
  test: /\.(png|gif|jpe?g|svg)$/i,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: 'images/[name].[hash:6].[ext]',
        publicPath: '../',
        limit: environment.limits.images,
      },
    },
  ],
});
