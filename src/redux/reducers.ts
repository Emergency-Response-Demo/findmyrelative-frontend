import { combineReducers } from 'redux'
import { nameReducer } from './reducers/name'

export const rootReducer = combineReducers({ name: nameReducer })

export type RootState = ReturnType<typeof rootReducer>;
