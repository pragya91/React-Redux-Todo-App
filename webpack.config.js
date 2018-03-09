const webpack = require('webpack');
module.exports = {
  entry : {
    app: './src/jsx/App.jsx',
    vendor: ['react','react-dom','react-router-dom','redux','react-redux']
  },
  output: {
    path: __dirname+'/dist/js',
    filename: 'app.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'libs.js'}),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015' ]
        }
      }]
  }
};
