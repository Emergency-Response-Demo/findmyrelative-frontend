import React from 'react'
import { TextInput, Button } from '@patternfly/react-core'

import './SearchBar.css'

interface SearchBarProps {
  onFormSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onFormSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    onFormSubmit()
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        className="search-input-field"
        type="text"
        placeholder="Name"
        aria-label="search input"
      />
      <Button type="submit" aria-label="search button" isInline={true}>
        Search
      </Button>
    </form>
  )
}

export default SearchBar
