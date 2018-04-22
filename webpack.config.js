const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: './dist/app.bundle.js'
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
    new HtmlWebpackPlugin()
  ]
}