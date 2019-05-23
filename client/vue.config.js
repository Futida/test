module.exports = {
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true,
      port: 9000,
      proxy: {
        '/api/*': {
          target: 'http://localhost:4000',
          secure: false,
          changeOrigin: true,
          pathRewrite: { '^/api': '' }
        }
      }
    },
  }
}
