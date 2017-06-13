const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-[hash:10].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new ExtractTextPlugin('style-[contenthash:10].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([
          // 'style-loader',
          'css-loader',
        ])
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: ['url-loader?limit=10000&name=assets/[hash:10].[ext]'],
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|eot|woff2?|svg)$/,
        use: ['url-loader?limit=10000&name=assets/[hash:10].[ext]'],
      },
    ]
  }
};

module.exports = config;
