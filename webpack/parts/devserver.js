const environment = require('./enviroment');

exports.devServer = () => ({
  devServer: {
    contentBase: environment.paths.output, // if you dont generate index.html you must indicate folder
    compress: true,
    port: 9000,
    liveReload: true,
    open: true,
    // watchContentBase: true, // When enabled, file changes will trigger a full page reload.
    // waitForBuild: true,
    historyApiFallback: true, // should be set if you rely on HTML5 History API based routing
    // proxy: {}
    // headers: {} - Attach custom headers to your requests here.
    // writeToDisk: true // To integrate with another server, it's possible to emit files from WDS
    watchOptions: {
      aggregateTimeout: 300, // Delay the first rebuild (in ms)
      poll: 1000, // Poll using interval (in ms or a boolean)
      ignored: /node_modules/, // Ignore to decrease CPU usage
    },
  }
});
