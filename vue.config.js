// const PreloadWebpackPlugin = require('preload-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    configureWebpack: {
        devServer:{
            historyApiFallback: true
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.scss";`
            }
        },
    },
}