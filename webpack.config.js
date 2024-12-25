const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|hdr)$/,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, "dist"), // Для собранных файлов
        publicPath: "/",
      },
      {
        directory: path.resolve(__dirname, "static"), // Для текстур
        publicPath: "/",
        watch: true,
      },
    ],
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".js", ".json"],
  },
};
