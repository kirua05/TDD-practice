class Cart {
  constructor(...products) {
    this.items = products
  }
  addProduct(p) {
    this.items.push(p)
  }
  hasProduct(p) {
    return this.items.includes(p)
  }
  // removeProduct(p) {
  //   this.items = this.items.filter(item => item !== p)
  // }

  removeProduct(p) {
    const idx = this.items.findIndex(item => item == p)

    if (idx != -1) {
      this.items.splice(idx, 1)
    }
  }


//   get totalPrice() {
//   return this.items.reduce((sum, item) => sum + item.price, 0)
// }

  totalPrice() {
    const total = this.items.reduce((acc, item) => acc + item.price, 0)
    if (total >= 1000) {
    return total * 0.9
  }
  return total
  }
  clearCart() {
    this.items = []
  }
}

export { Cart }