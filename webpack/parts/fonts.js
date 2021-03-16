const environment = require('./enviroment');

exports.fonts = () => ({
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: 'fonts/[name].[hash:6].[ext]',
        publicPath: '../'
        // outputPath: "fonts/"
      },
    },
  ]
});
