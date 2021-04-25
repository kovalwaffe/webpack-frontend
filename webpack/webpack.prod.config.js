const path = require("path");
const {MiniHtmlWebpackPlugin} = require("mini-html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const environment = require('./parts/enviroment');
const {fonts} = require("./parts/fonts");
const {images} = require("./parts/images");
const {cssLoader} = require('./parts/css-loader');
const {devServer} = require('./parts/devserver');


module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map' ,
  target: 'web', // only for develomplent
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
    new MiniHtmlWebpackPlugin({context: {title: "Demo"}})
  ],
};
