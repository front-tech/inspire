const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
    library: {
        type: 'system',
    },
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        inject: false
      }),
    ],
};