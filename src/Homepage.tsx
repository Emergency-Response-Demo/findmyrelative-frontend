import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Page, PageHeader, PageSection } from '@patternfly/react-core'
import SearchBar from './components/SearchBar'
import { searchName } from './redux/actionCreators'
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchDetails: (name: string) => {
    dispatch(searchName(name))
  }
})

interface HomepageProps {
  fetchDetails: (name: string) => void;
}

export const Homepage: React.FC<HomepageProps> = ({ fetchDetails }) => (
  <Page header={<Header logo={appLogo} />}>
    <PageSection>
      <SearchBar onFormSubmit={fetchDetails} />
    </PageSection>
  </Page>
)

export default connect(null, mapDispatchToProps)(Homepage)
