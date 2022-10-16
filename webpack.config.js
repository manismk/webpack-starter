const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { bundle: path.resolve(__dirname, "src/index.js") },
  output: { path: path.resolve(__dirname, "dist") },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html",
    }),
  ],
};
