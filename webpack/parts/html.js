const environment = require('./enviroment');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

exports.html = () => {
  return new HtmlWebpackPlugin({
    inject: true,
    hash: false,
    title: 'Custom template',
    // Load a custom template (lodash by default)
    template: environment.paths.source + '/index.html',
    filename: 'index.html',
    favicon: path.resolve(environment.paths.source, 'images', 'favicon.ico'),
  })
};
