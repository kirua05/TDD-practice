import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import SimpleAddMinusMachine from '@/components/form/SimpleAddMinusMachine.vue'

describe('簡單加減器', () => {
  test('中間的預設文字 0', () => {
    const wrapper = mount(SimpleAddMinusMachine)
    const input = wrapper.find('span')
    expect(input.text()).toEqual('0')
  })
    test('+ - 按鈕功能', async () => {
      const wrapper = mount(SimpleAddMinusMachine)
      const input = wrapper.find('span')
      const plusBtn = wrapper.find('[data-testid="plusBtn"]')
      const minusBtn = wrapper.find('[data-testid="minusBtn"]')

      expect(input.text()).toEqual('0')

      await plusBtn.trigger('click')
      await plusBtn.trigger('click')

      expect(input.text()).toEqual('2')

      await minusBtn.trigger('click')
      expect(input.text()).toEqual('1')
    })
    test('數字不能為負', async () => {
      const wrapper = mount(SimpleAddMinusMachine)
      const input = wrapper.find('span')
      const minusBtn = wrapper.find('[data-testid="minusBtn"]')

      expect(input.text()).toEqual('0')
      await minusBtn.trigger('click')
      await minusBtn.trigger('click')
      await minusBtn.trigger('click')
      expect(input.text()).toEqual('0')
    })
})