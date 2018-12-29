const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: [
    './src/index.js'
],
output: {
    path: __dirname,
    filename: 'app/js/main.js'
},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },       
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    historyApiFallback : true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};