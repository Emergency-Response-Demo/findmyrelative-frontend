import { ThunkAction } from 'redux-thunk'
import { RootState } from './reducers'
import { VictimDetail } from '../types'

export const SEARCH_NAME = 'SEARCH_NAME'
export const REQUEST_DETAILS = 'REQUEST_DETAILS'
export const RECIEVE_DETAILS = 'RECIEVE_DETAILS'

export interface Action {
  type: string;
}

interface SearchNameAction {
  payload: {
    name: string;
  };
}

interface RequestDetailsAction {
  payload: {
    name: string;
  };
}

interface RecieveDetailsAction {
  payload: {
    isSuccessful: boolean;
    data: VictimDetail[];
  };
}

export type SearchNameType = SearchNameAction & Action;
export type AppThunk<ReturnType = void> = ThunkAction<
  void,
  RootState,
  unknown,
  Action
>;
export type RequestDetailsType = Action & RequestDetailsAction;
export type RecieveDetailsType = Action & RecieveDetailsAction;
