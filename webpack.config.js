const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },

      //Loading images
      {
        test: /\.(png|jpg|jpeg|webp|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img",
              name: "[name]-[sha1:hash:7].[ext]",
            }
          }
        ]
      },

      //Loading HTML
      {
        test: /\.(html)$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
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
              outputPath: "css",
              name: "[name].[ext]",
            },
          },

          {
            loader: "css-loader",
          },

          {
            loader: "sass-loader",
          }
          
        ]
      },
      // Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
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
        loader: "file-loader",
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Natours | Exciting tours for adventurous people",
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ],

  devServer: {
    open: true,
  }
};