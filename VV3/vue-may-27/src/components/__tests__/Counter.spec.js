// create a button, init qrantity = 0
// press= +1
// through prop to set init quantity

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CounterButton from '../UI/CounterButton.vue'


describe("計數器按鈕" , () => {
  it("create a button, init qrantity = 0", () => {
    const wrapper = mount(CounterButton)
    expect(wrapper.text()).toEqual('0')
  })
  it("press the button, quantity +1", async() => {
    const btn = mount(CounterButton)
    await btn.trigger('click')
    expect(btn.text()).toEqual('1')
  })
  it("through prop to set init quantity", () => {
    const btn = mount(CounterButton, { props: { initCount: 100 }})
    expect(btn.text()).toEqual('100')

  })
})