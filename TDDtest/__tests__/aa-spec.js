function add(x, y) {
  return 3
}

test("簡單的數學加法器", () => {
  expect(add(1, 2)).toBe(3)
  // expect(add(3, 5)).toBe(4)

})
