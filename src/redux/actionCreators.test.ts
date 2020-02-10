import { searchName } from './actionCreators'
import { SEARCH_NAME } from './types'

it('should create an action to search victim name', () => {
  const name = 'Chuck Norris'
  const expectedAction = {
    type: SEARCH_NAME,
    payload: { name }
  }
  expect(searchName(name)).toEqual(expectedAction)
})
