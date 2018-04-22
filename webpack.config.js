const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./dist/app.bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}