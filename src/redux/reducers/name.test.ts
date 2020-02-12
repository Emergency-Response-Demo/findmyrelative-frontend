import { nameReducer } from './name'
import { REQUEST_DETAILS } from '../types'

it('should return the initial state', () => {
  expect(nameReducer(undefined, {})).toEqual('')
})

it('should handle REQUEST_DETAILS', () => {
  const expectedState = 'test'
  expect(
    nameReducer(undefined, {
      type: REQUEST_DETAILS,
      payload: { name: 'test' }
    })
  ).toEqual(expectedState)
})
