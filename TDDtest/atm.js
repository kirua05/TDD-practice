class ATM {
  constructor(money) {
    this.money = money
  }
  deposit(money) {
    if (money > 0) {
    this.money += money
    }
  }

  withdraw(money) {
    if (money > 0 && money <= this.balance()) {
      this.money -= money
      return money
    }
    return 0
  }

  balance(money) {
    return this.money
  }
}

export { ATM }