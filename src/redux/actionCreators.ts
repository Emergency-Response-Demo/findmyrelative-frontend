import { Dispatch } from 'redux'
import {
  REQUEST_DETAILS,
  RECIEVE_DETAILS,
  RequestDetailsType,
  RecieveDetailsType,
  AppThunk
} from './types'
import { VictimDetail } from '../types'
import { getVictimData } from '../mock/mockSearchData'

export function requestDetails (name: string): RequestDetailsType {
  return { type: REQUEST_DETAILS, payload: { name } }
}

type RawVictimDetail = { map: VictimDetail };
export function recieveDetails (
  isSuccessful: boolean,
  data: RawVictimDetail[]
): RecieveDetailsType {
  const parsedData = data.map((item: RawVictimDetail) => item.map)
  return {
    type: RECIEVE_DETAILS,
    payload: { isSuccessful, data: parsedData }
  }
}

export function searchName (name: string): AppThunk {
  return function (dispatch: Dispatch): void {
    dispatch(requestDetails(name))
    if (process.env.REACT_APP_MOCK_API) {
      const mockResponse = getVictimData(name)
      console.log(mockResponse)
      dispatch(recieveDetails(true, mockResponse.map.victims.list))
    } else {
      fetch(process.env.REACT_APP_BACKEND_URL + `/find/victim/byName/${name}`)
        .then((response) => response.json())
        .then(
          (data) => dispatch(recieveDetails(true, data.map.victims.list)),
          (error) => {
            dispatch(recieveDetails(false, []))
            console.log('Error making request: ', error)
          }
        )
    }
  }
}
