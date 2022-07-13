// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
  entry: {
    main: './src/scripts/index.js',
    account: './src/scripts/account.js',
    detailed: './src/scripts/detailed.js',
    historyBalance: './src/scripts/historyBalance.js',
    currency: './src/scripts/currency.js',
    atm: './src/scripts/atm.js',
  },
  output: {
    filename: 'main.[contenthash].js',
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'account.html',
      template: './account.html',
      chunks: ['account'],
    }),
    new HtmlWebpackPlugin({
      filename: 'detailed.html',
      template: './accountDetailed.html',
      chunks: ['detailed'],
    }),
    new HtmlWebpackPlugin({
      filename: 'historyBalance.html',
      template: './historyBalance.html',
      chunks: ['historyBalance'],
    }),
    new HtmlWebpackPlugin({
      filename: 'currency.html',
      template: './currency.html',
      chunks: ['currency'],
    }),
    new HtmlWebpackPlugin({
      filename: 'ATM.html',
      template: './ATM.html',
      chunks: ['atm'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /all\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
