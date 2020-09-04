import Vue from 'vue'
import VueRouter from 'vue-router'

// 实现懒加载
const home = () => import("views/home/Home")
const profile = () => import("views/profile/Profile")
const category = () => import("views/category/Category")
const shopcart = () => import("views/shopcart/Shopcart")
const detail = () => import("views/detail/Detail")

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    // 记住不能写 component 
    component: home
  },
  {
    path: "/profile",
    // 记住不能写 component 
    component: profile
  },
  {
    path: "/category",
    // 记住不能写 component 
    component: category
  },
  {
    path: "/shopcart",
    // 记住不能写 component 
    component: shopcart
  },
  {
    // path: '/detail/:iid',
    path: '/detail',
    component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

