const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
    },
    devtool: "inline-source-map",
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
    },
    devServer: {
      static: "./dist",
    },
    plugins: [
       // new BundleAnalyzerPlugin(),
       new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    optimization: {
      runtimeChunk: 'single',
    },
};