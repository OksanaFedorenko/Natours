const path = require('path');
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  //mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },

      //Loading images
      {
        test: /\.(png|jpg|jpeg|webp|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img",
              name: "[name].[ext]",
              //name: "[name]-[sha1:hash:7].[ext]",
            },
          },
        ],
      },
      
      //Loading css
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },

      //Loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../", // path to director where assets folder is located
            },
          },

          {
            loader: "css-loader",
          },

          {
            loader: "sass-loader",
          },
        ],
      },

      // Loading fonts
      {
        test: /\.(ttf|otf|svg|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              name: "[name].[ext]",
            },
          },
        ],
      },
      //Loading video
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Natours | Exciting tours for adventurous people",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],

  devServer: {
    open: true,
  },
};