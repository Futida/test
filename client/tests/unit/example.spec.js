import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import User from '@/components/User.vue'

const $t = () => {};

describe('Test Components', () => {
  test('является экземпляром Vue', () => {
    const wrapper = shallowMount(Home,
    {
      mocks: { $t },
    })
    expect(wrapper.isVueInstance()).toBeTruthy()

  })

  test('Рендер компонента, является экземпляром Vue, div элемент как контейнер User', () => {
    const wrapper = shallowMount(User,
    {
      mocks: { $t },
      computed: {
        user() {
          return { name: 'name', lastName: 'lastName', email: 'email' }
        }
      },
    });
    const div = wrapper.find('.d-flex')
    expect(wrapper.is(User)).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(div.name('div'))
  })
})
