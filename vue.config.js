const path = require('path')

module.exports = {
  // 配置 webpack
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': '@/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // 配置全局 less 文件中变量的语句
  lintOnSave: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // 下面的 less 是全局的文件后缀名字
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
}

  // 配置全局 less 文件中变量的语句
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // 下面的 地址是全局的文件的地址
        path.resolve(__dirname, './src/assets/css/base.less'),
      ],
    })
  }