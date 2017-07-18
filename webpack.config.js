var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/tension.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "app/assets/javascripts/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/.jsx?$/, /.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
