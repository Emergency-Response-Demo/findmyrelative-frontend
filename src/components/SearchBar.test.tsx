import React from 'react'
import Enzyme from 'enzyme'

import SearchBar from './SearchBar'

const { mount } = Enzyme

it('renders without crashing', () => {
  mount(<SearchBar />)
})

it('runs callback on submit', () => {
  const callback = jest.fn()
  const wrapper = mount(<SearchBar onFormSubmit={callback} />)
  wrapper.find('form').simulate('submit')
  expect(callback).toHaveBeenCalled()
})
