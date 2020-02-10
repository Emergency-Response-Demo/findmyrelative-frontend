import { SearchNameType, SEARCH_NAME } from '../types'

export function nameReducer (state = '', action: SearchNameType) {
  switch (action.type) {
    case SEARCH_NAME:
      return action.payload.name
    default:
      return state
  }
}
