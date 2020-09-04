import {request} from './request'

export function recommend (config) {
  return request ({
    url: 'recommend'
  })
}
