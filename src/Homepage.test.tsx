import React from 'react'
import Enzyme from 'enzyme'
import Homepage from './Homepage'

const { mount } = Enzyme

// import Page from '@patternfly/react-core'

it('renders without crashing', () => {
  mount(<Homepage />)
})
