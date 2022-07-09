const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查 // 写原生webpack的配置项
  configureWebpack: {
    devServer: {
      open: true,
      port: 10086,
      host: 'localhost'
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '好客租房'
      return args
    })
  }
})
