import { request } from './request'

export function multiData() {
  return request({
    url: '/home/multidata'
  })
}

export function goodList(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
