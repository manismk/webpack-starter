const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { bundle: path.resolve(__dirname, "src/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 3001,
    hot: true,
    open: true,
  },
};
