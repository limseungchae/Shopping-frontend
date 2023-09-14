// https://stackoverflow.com/questions/70574851/how-to-solve-cors-in-vue-js

module.exports = {
  devServer: {
    // Paths
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    proxy: {
      '/api':{
        target:'http://localhost:8080', // your address
      }
    }
  }
}