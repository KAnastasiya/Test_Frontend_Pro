const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
