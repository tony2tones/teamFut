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
      },
      {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000' }
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