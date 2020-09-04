import axios from "axios"

export function request(config) {
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    // 超时时间
    timeout: 5000 
  })

  instance1.interceptors.response.use(config => {
    // console.log(config)
    // 拦截之后注意要将结果 放回 以便用户可以收到结果
    return config.data
  },err => {
    // 如果没有拦截到的话，爆出错误的信息
    // console.log(err)
  })

  // 真正的发出信息
  return instance1(config)
}
