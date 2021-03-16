const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.cssLoader = () => ({
  test: /\.((c|sa|sc)ss)$/i,
  sideEffects: true, // need for tree-shaking
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      // options: {
      //   publicPath: '../'
      // }
    },
    {
      loader: "css-loader", // goes through possible @import and url()
      // options: {
      //   url: false,
      //   sourceMap: true,
      //   importLoaders: 6,
      // },
    },
    {
      loader: "postcss-loader",
      options: {
        // sourceMap: true,
        postcssOptions: {plugins: [require("autoprefixer")()]},
      },
    },
    {
      loader: "sass-loader",
      // options: {sourceMap: true}
    }
  ]
});

