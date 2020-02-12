import { combineReducers } from 'redux'
import { nameReducer } from './reducers/name'
import { detailsReducer } from './reducers/details'

export const rootReducer = combineReducers({
  name: nameReducer,
  details: detailsReducer
})

export type RootState = ReturnType<typeof rootReducer>;
