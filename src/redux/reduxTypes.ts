import { VictimDetail } from '../types'

export const REQUEST_DETAILS = 'REQUEST_DETAILS'
export const RECIEVE_DETAILS = 'RECIEVE_DETAILS'

export interface Action {
  type: string;
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

export type RequestDetailsType = Action & RequestDetailsAction;
export type RecieveDetailsType = Action & RecieveDetailsAction;
