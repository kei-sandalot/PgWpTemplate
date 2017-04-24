module.exports = {
    entry: __dirname + '/src/js/main.js',
    output: {
      path: __dirname + '/www',
      filename: 'bundle.js'
    },
    devtool: 'source-map'
};
