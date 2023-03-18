const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "production",
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
            test: /\.(jpe?g|png|jpg|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  context: path.resolve(__dirname, "src/"),
                  outputPath: '/images/',
                  useRelativePaths: true
                }
            }
            ] 
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
    },
    devServer: {
      static: "./dist",
    },
    plugins: [
       // new BundleAnalyzerPlugin(),
       new HtmlWebpackPlugin({
        title: 'King Hill Restaurant',
      }),
    ],
    optimization: {
      runtimeChunk: 'single',
    },
    performance: { hints: false }
};