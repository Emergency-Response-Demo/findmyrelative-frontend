import React, { useState } from "react";
import { PageSection, TextInput, Button } from "@patternfly/react-core";

import SearchData from "./types";
import "./App.css"

interface SearchFormProps {
  onFormSubmit: (data: SearchData) => void;
}

const SearchForm: React.FC<SearchFormProps> = props => {
  const [name, setName] = useState("");
  const handleNameChange = (value: string) => setName(value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    props.onFormSubmit({ name });
    // Prevent page reload
    e.preventDefault();
  };

  return (
    <PageSection>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <TextInput
          type="search"
          placeholder="Search Victim..."
          className = "searchbar"
          isRequired={true}
          value={name}
          onChange={handleNameChange}
          aria-label="Search by Name"
        />
      </form>
    </PageSection>
  );
};

export default SearchForm;
