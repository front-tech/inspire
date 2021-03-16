const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/app.js',
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
	rules: [
	  {
		test: /\.css$/,
		use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
		],
	  },
	],
  },
};