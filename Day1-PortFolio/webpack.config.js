var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: ["./index.js", "./scss/main.sass", './public/index.html'],
    output: {
        path: __dirname,
        filename: "./bundle.js",
        publicPath: "./public"
    },
    module: {
        loaders:[
            { test: /\.html$/, loader: "html" }
        ],
        rules: [{
            test: /\.sass$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            // use: [{
            //     loader: "style-loader"
            // }, {
            //     loader: "css-loader"
            // }, {
            //     loader: "sass-loader"
            // }]
        }]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: 'public/css/[name].css',
            allChunks: true,
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development, 
            // ./public directory is being served 
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['public'] }
        })
    ],
}