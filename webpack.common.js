const path = require("path")
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const exludedFolders = [path.join(__dirname, "node_modules")]
const CopyPlugin = require('copy-webpack-plugin');

let plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
  }),
  new CopyPlugin([
    { from: './static', to: './public' },
  ]),
]

module.exports = {
  entry: {
    client: "./src/index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "public"),
    chunkFilename: "[name].js",
  },
  resolve: {
    modules: [
      path.resolve("./src"),
      path.resolve("./static"),
      path.resolve("./styles"),
      path.resolve("./node_modules"),
    ],
  },
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: exludedFolders,
        use: "babel-loader",
      },
      // CSS
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          'postcss-loader',
        ],
      },
      {
        // For CSS modules
        test: /\.module\.css$/i,
        exclude: exludedFolders,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins,
}