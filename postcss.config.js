module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗的宽度，对应的是我们的设计稿的宽度
      viewportHeight: 667, // 视窗的高度， 对应的是我们设计稿的高度
      unitPrecision: 5, // 指定 px 转换为 视窗 单位数值的小数位数 （很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗的单位，建议使用 vw
      // selectorBlackList: ['ignore', 'tabbar', 'tabbar_item'], // 指定不需要转换的 类 ， 后面再讲（所有的元素包含有 ignore 的类都不会进行转换）
      minPixelValue: 1, // 小于或者等于 1px 不转换成 视窗的单位
      mediaQuery: false, // 允许在媒体查询中转换 px
      // exclude: [/Tabbar/], // 必须是正则表达式，表示忽略掉匹配到的文件
    }
  }
}