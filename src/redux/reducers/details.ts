import {
  REQUEST_DETAILS,
  RECIEVE_DETAILS,
  RequestDetailsType,
  RecieveDetailsType
} from '../types'

const initialState = {
  isFetching: false,
  wasSuccessful: true,
  hasData: false,
  data: []
}

type ActionType = RequestDetailsType & RecieveDetailsType;
export function detailsReducer (state = initialState, action: ActionType) {
  switch (action.type) {
    case REQUEST_DETAILS:
      return Object.assign(state, { isFetching: true })
    case RECIEVE_DETAILS:
      if (action.payload.wasSuccessful) {
        return Object.assign(state, {
          hasData: true,
          isFetching: false,
          data: action.payload.data
        })
      } else {
        return Object.assign(state, {
          hasData: false,
          isFetching: false,
          data: []
        })
      }
    default:
      return state
  }
}
