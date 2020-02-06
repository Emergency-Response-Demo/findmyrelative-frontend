import { nameReducer } from './name'
import { SEARCH_NAME } from '../types'

it('should return the initial state', () => {
  expect(nameReducer(undefined, {})).toEqual('')
})

it('should handle SEARCH_NAME', () => {
  const expectedState = 'test'
  expect(nameReducer(undefined, { type: SEARCH_NAME, name: 'test' })).toEqual(
    expectedState
  )
})
