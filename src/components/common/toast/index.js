import Toast from './Toast'

const obj = {}

// 在vue中使用了 vue.use（'插件'） 这个函数之后， vue 会自动去寻找 install 这个函数，并且调用这个函数
obj.install = function (Vue) {

  // console.log('执行了 install 函数')

  // 1. 创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2. 用 new 的方式，根据组件构造器创建出一个组件对象
  const toast = new toastConstructor()

  // 3. 将组件对象， 手动挂载到某一个元素上
  toast.$mount(document.createElement('div')) 

  // 4. toast.$el 就是对应的 div 对象
  document.body.appendChild(toast.$el)

  // 将新创建的组件对象添加到 vue 的原型当中，使得每个组件都可以直接使用
  Vue.prototype.$toast = toast
}

export default obj