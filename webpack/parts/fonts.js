const environment = require('./enviroment');

exports.fonts = () => ({
  // test: /\.(eot|svg|ttf|woff|woff2)$/,
  test:  /\.(ttf|eot|woff|woff2)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 50000,
        mimetype: "application/font-woff",
        name: '[name].[hash:6].[ext]',
        publicPath: '../',
        outputPath: "fonts/"
      },
    },
  ]
});
