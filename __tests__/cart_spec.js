import { Cart } from "../cart"
import { Product } from "../product"


describe("購物車計算機", () => {
  test("可以新增商品（名字、價格）", () => {
    const cart = new Cart()
    const p1 = new Product("吉伊卡哇", 10)
    const p2 = new Product("吉娃娃", 20)
    const p3 = new Product("吉祥你來", 30)

    cart.addProduct(p1)
    cart.addProduct(p2)

    expect(cart.items.length).toBe(2)
    expect(cart.hasProduct(p2)).toBe(true)
    expect(cart.hasProduct(p3)).toBe(false)
  })
  test("可以刪除的商品", () => {
    const p1 = new Product("吉伊卡哇", 10)
    const p2 = new Product("吉娃娃", 20)
    const cart = new Cart(p1, p2)

    cart.removeProduct(p1)

    expect(cart.items.length).toBe(1)
    expect(cart.hasProduct(p1)).toBe(false)
    expect(cart.hasProduct(p2)).toBe(true)
  })

  test("可以計算總價", () => {
    const p1 = new Product("吉伊卡哇", 10)
    const p2 = new Product("吉娃娃", 20)
    const cart = new Cart(p1, p2)

    cart.addProduct(p2)

    expect(cart.totalPrice()).toBe(50)
  })

    test("有折扣機制，滿千打九折", () => {
    const p1 = new Product("吉伊卡哇", 500)
    const p2 = new Product("吉娃娃", 300)
    const cart = new Cart(p1, p2)

    expect(cart.totalPrice()).toBe(800)
    
    cart.addProduct(p2)
    expect(cart.totalPrice()).toBe(990)
  })
    test("清空購物車", () => {
    const p1 = new Product("吉伊卡哇", 10)
    const p2 = new Product("吉娃娃", 20)
    const cart = new Cart(p1, p2)

    expect(cart.items.length).toBe(2)
    expect(cart.totalPrice()).not.toBe(0)

    cart.clearCart(p1, p2)

    expect(cart.items.length).toBe(0)
    expect(cart.hasProduct(p1)).toBe(false)
    expect(cart.hasProduct(p2)).toBe(false)
    expect(cart.totalPrice()).toBe(0)
  })
})