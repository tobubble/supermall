
import {
  ADD_CART,
  ADD_COUNT,
  SELECTED,
  UNSELECTED
} from './mutations_types'

export default {
  [ADD_CART](state, payLoad) { 
    payLoad.count = 1
    payLoad.isChecked = true
    state.cartList.push(payLoad)
  },
  [ADD_COUNT](state, payLoad) {
    payLoad.count++
  },
  [SELECTED](state) {
    for (let item of state.cartList) {
      item.isChecked = true;
    }
  },
  [UNSELECTED](state) {
    for (let item of state.cartList) {
      item.isChecked = false;
    }
  },
}