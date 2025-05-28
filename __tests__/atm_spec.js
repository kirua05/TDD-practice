import { ATM } from "../atm"

describe("存錢功能", () => {
  test("可以存錢", () => {
    // 3A 原則
    // Arrange
    const account = new ATM (5)
    
    // Act
    account.deposit(5)
    
    // Assert
    expect(account.balance()).toBe(10)
  })
  test("不能存0或小於0", () => {

    const account = new ATM (5)
    account.deposit(-10)
    expect(account.balance()).toBe(5)
  })
})

describe("領錢功能", () => {
  test("可以領錢", () => {
    const account = new ATM(10)
    const result = account.withdraw(3)

    expect(account.balance()).toBe(7)
    expect(result).toBe(3)
  })
    test("不能領0或小於0", () => {
    const account = new ATM(5)
    const result = account.withdraw(-1)

    expect(account.balance()).toBe(5)
    expect(result).toBe(0)
  })
    test("不能領超過本身餘額", () => {
    const account = new ATM(5)
    const result = account.withdraw(10)

    expect(account.balance()).toBe(5)
    expect(result).toBe(0)
  })
})
