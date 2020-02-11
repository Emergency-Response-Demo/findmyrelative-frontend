import { RequestDetailsType, REQUEST_DETAILS } from '../types'

export function nameReducer (state = '', action: RequestDetailsType) {
  switch (action.type) {
    case REQUEST_DETAILS:
      return action.payload.name
    default:
      return state
  }
}
