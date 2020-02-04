import React from 'react'

import '@patternfly/react-core/dist/styles/base.css'
import { Page, PageHeader, PageSection } from '@patternfly/react-core'

import SearchBar from './components/SearchBar'

const logoProps = {
  href: 'https://erdemo.io',
  target: '_blank'
}

const Header = (
  <PageHeader
    logo="Find My Relative"
    logoProps={logoProps}
    toolbar="Toolbar"
    avatar=" | Avatar"
  />
)

const Homepage: React.FC = () => {
  return (
    <Page header={Header}>
      <PageSection>
        <SearchBar onFormSubmit={() => {}} />
      </PageSection>
    </Page>
  )
}

export default Homepage
