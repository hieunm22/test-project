import { mount, configure } from 'enzyme'
import Counter from './Counter'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({adapter: new Adapter()});

describe('Counter Testing', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Counter />)
  })

  test('test click increase button', () => {
    const incrementButton = wrapper.find('#increment-btn')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    const txt = wrapper.find('#counter-value').text()
    expect(txt).toBe('2')
    expect(txt > 0).toBe(true)
  })

  test('test click decrease button', () => {
    const decrementButton = wrapper.find('#decrement-btn')
    decrementButton.simulate('click')
    decrementButton.simulate('click')
    decrementButton.simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('-3')
  })

  test('test click both butotn', () => {
    const decrementButton = wrapper.find('#decrement-btn')
    decrementButton.simulate('click')
    decrementButton.simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('-2')
    const incrementButton = wrapper.find('#increment-btn')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('4')
  })
})
