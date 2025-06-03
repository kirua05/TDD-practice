function password_validator(pw) {
  if (pw.length > 8 &&pw.match(/[a-zA-Z]/g) && pw.match(/[0-9]/g) &&! pw.match(/\s/g)) {
    return true
  }
  return false
}

describe("密碼驗證器", () => {
  test("密碼長度必須大於8", () => {
    expect(password_validator("A23456789")).toBe(true)
    expect(password_validator("12345")).toBe(false)
  })
  test("密碼必須有英文跟數字", () => {
    expect(password_validator("1234567Az")).toBe(true)
    expect(password_validator("123456789")).toBe(false)

  })
  test("密碼必須沒有空格", () => {
    expect(password_validator("1234567Az")).toBe(true)
    expect(password_validator("123456 7Az")).toBe(false)
  })
})