import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import ListUsers from '@/components/ListUsers.vue'
const $t = () => {}

describe('Test Components', () => {
  test('является экземпляром Vue', () => {
    const wrapper = shallowMount(Home, { mocks: { $t } })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('открывается модальное окон', () => {
    const wrapper = shallowMount(ListUsers, { mocks: { $t } })
    wrapper.find('.btn-modal').trigger('click')
    console.log(wrapper.find('modal-dialog'))
    expect(wrapper.find('modal-dialog').toBe('div'))
  })
})
