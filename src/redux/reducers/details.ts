import {
  REQUEST_DETAILS,
  RECIEVE_DETAILS,
  RequestDetailsType,
  RecieveDetailsType
} from '../reduxTypes'

const initialState = {
  isFetching: false,
  isSuccessful: true,
  data: []
}

type ActionType = RequestDetailsType & RecieveDetailsType;
export function detailsReducer (state = initialState, action: ActionType) {
  switch (action.type) {
    case REQUEST_DETAILS:
      return { ...state, isFetching: true }
    case RECIEVE_DETAILS:
      if (action.payload.isSuccessful) {
        return {
          ...state,
          isFetching: false,
          data: action.payload.data
        }
      } else {
        return { ...state, isFetching: false, data: [] }
      }
    default:
      return state
  }
}
