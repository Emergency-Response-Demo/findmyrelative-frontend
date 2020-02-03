import React from 'react'
import Enzyme from 'enzyme'
import Homepage from './Homepage'

const { shallow } = Enzyme

// import Page from '@patternfly/react-core'

it('consists of Page', () => {
  shallow(<Homepage />)
})
