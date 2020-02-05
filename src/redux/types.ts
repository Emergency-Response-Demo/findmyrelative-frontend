export const SEARCH_NAME = 'SEARCH_NAME'

interface Action {
  type: string;
}

interface SearchNameAction {
  name: string;
}

export type SearchNameType = SearchNameAction & Action;
