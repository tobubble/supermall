export default {
  showAllPrice(state) {
    let allPricec = 0
    for(let item of state.cartList) {
      if(item.isChecked === true) {
        allPricec +=  item.count * item.price
      }
    }
    return allPricec
  }
}