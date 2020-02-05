import React from 'react'
import Enzyme from 'enzyme'

import SearchBar from './SearchBar'

const { mount } = Enzyme

function setup () {
  const props = {
    onFormSubmit: jest.fn()
  }
  const enzymeWrapper = mount(<SearchBar {...props} />)
  return { props, enzymeWrapper }
}

it('should render itself and subcomponents', () => {
  const { enzymeWrapper } = setup()
  expect(enzymeWrapper.exists('form')).toBe(true)
  expect(enzymeWrapper.exists('TextInput')).toBe(true)
  expect(enzymeWrapper.exists('Button')).toBe(true)
})

it('should run callback on submit', () => {
  const { props, enzymeWrapper } = setup()
  enzymeWrapper.simulate('submit')
  expect(props.onFormSubmit).toHaveBeenCalled()
})
