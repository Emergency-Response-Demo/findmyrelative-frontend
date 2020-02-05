import React from 'react'

import { Page, PageHeader, PageSection } from '@patternfly/react-core'
import SearchBar from './components/SearchBar'
import '@patternfly/react-core/dist/styles/base.css'

interface HeaderProps {
  logo: { href: string; target: string };
}
const Header: React.FC<HeaderProps> = ({ logo }) => (
  <PageHeader
    logo="Find My Relative"
    logoProps={logo}
    toolbar="Toolbar"
    avatar=" | Avatar"
  />
)

const appLogo = {
  href: 'https://erdemo.io',
  target: '_blank'
}

const Homepage: React.FC = () => (
  <Page header={<Header logo={appLogo} />}>
    <PageSection>
      <SearchBar onFormSubmit={() => {}} />
    </PageSection>
  </Page>
)

export default Homepage
