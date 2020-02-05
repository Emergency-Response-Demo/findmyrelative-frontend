import React from 'react'
import Enzyme from 'enzyme'
import { Homepage } from './Homepage'

const { mount } = Enzyme

function setup () {
  const enzymeWrapper = mount(<Homepage />)
  return { enzymeWrapper }
}

it('should render itself and subcomponents', () => {
  const { enzymeWrapper } = setup()
  expect(enzymeWrapper.exists('Page')).toBe(true)
  expect(enzymeWrapper.exists('PageSection')).toBe(true)
  expect(enzymeWrapper.exists('SearchBar')).toBe(true)
})
