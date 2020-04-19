// const PreloadWebpackPlugin = require('preload-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.scss";`
            }
        },
    },
    // configureWebpack: {
    //     plugins: [
    //         new HtmlWebpackPlugin(),
    //         new PreloadWebpackPlugin()
    //     ]
    // }
    }