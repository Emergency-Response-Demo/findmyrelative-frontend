import React from 'react'
import { TextInput, Button } from '@patternfly/react-core'

interface SearchBarProps {
  onFormSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    props.onFormSubmit()
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextInput type="text" aria-label="search input" />
      <Button type="submit" aria-label="search button" isInline={true}>
        Search
      </Button>
    </form>
  )
}

export default SearchBar
