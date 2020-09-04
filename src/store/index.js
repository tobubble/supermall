import Vue from "vue"
import Vuex from "vuex"

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

// 记住 vuex 的使用 创建的时候使用的
const store = new Vuex.Store({
  state: {
    // 保存购物车信息
    cartList: [],
    // 保存总价格
    allPrice: 0
  },
  // 由于使用的 es6 的语法，这里导入的时候不要大写
  actions,
  getters,
  mutations,
  modules: {
    a: moduleA
  },
})

export default store