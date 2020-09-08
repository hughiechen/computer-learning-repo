const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
// 导入速度分析插件
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// 实例化插件
const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap({
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      {
        test: /\.js$/,
        use: ["thread-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
  mode: "production",
});
