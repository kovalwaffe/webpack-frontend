const path = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const environment = require('./parts/enviroment');
const {fonts} = require("./parts/fonts");
const {images} = require("./parts/images");
const {cssLoader} = require('./parts/css-loader');
const {devServer} = require('./parts/devserver');
const {html} = require('./parts/html');


module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map' ,
  target: 'web', // only for development
  entry: {
    app: path.resolve(environment.paths.source, 'js', 'app.js'),
  }, // Start bundling
  output: {
    path: environment.paths.output, // Output to dist directory
    filename: "js/[name].js", // Emit app.js by capturing entry name
  },
  ...devServer(),
  module: {
    rules: [
      cssLoader(),
      images(),
      fonts()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    html()
  ],
};
