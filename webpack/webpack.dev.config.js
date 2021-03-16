const path = require("path");
const webpack = require("webpack");
const {MiniHtmlWebpackPlugin} = require("mini-html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {mode} = require("webpack-nano/argv");
const environment = require('./parts/enviroment');
const {devServer} = require('./parts/devserver');
const {cssLoader} = require('./parts/css-loader');


module.exports = {
  mode: 'development',
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
      cssLoader()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new MiniHtmlWebpackPlugin({context: {title: "Demo"}})
  ],
};
