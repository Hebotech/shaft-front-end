module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/shaft/'
    : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.scss";`
            }
        }
    }
};