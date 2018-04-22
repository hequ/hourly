const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-decorators', ['@babel/plugin-proposal-class-properties', { 'loose' : true }]]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist"),
    new HtmlWebpackPlugin({
      title: 'Hourly',
      template: 'templates/index.html'
    })
  ]
}