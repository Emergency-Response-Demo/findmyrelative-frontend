import { SEARCH_NAME, SearchNameType } from './types'

export function searchName (name: string): SearchNameType {
  return { type: SEARCH_NAME, payload: { name } }
}
