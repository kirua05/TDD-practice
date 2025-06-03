import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import InputField from '@/components/UI/InputField.vue'

describe('動態字數顯示',() => {
  test('沒有輸入的時候，顯示「使用者尚未輸入文字」', () => {
    const wrapper = mount(InputField)
    expect(wrapper.text()).toContain('你輸入了 0 個字')
  })
  test('使用者可輸入文字', async () => {
    const wrapper = mount(InputField)
    const input = wrapper.find('input')

    await input.setValue('asdfghj')
    expect(wrapper.text()).toContain('你輸入了 7 個字')
  })
})