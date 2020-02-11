import React from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { Page, PageHeader, PageSection } from '@patternfly/react-core'
import history from './history'
import SearchBar from './components/SearchBar'
import { searchName } from './redux/actionCreators'
import { RootState } from './redux/reducers'
import { Action } from './redux/types'
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

type HomepageProps = DispatchFromProps;

export const Homepage: React.FC<HomepageProps> = ({ fetchDetails }) => (
  <Page header={<Header logo={appLogo} />}>
    <PageSection>
      <SearchBar onFormSubmit={fetchDetails} />
    </PageSection>
  </Page>
)

interface DispatchFromProps {
  fetchDetails: (name: string) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, Action>
): DispatchFromProps => ({
  fetchDetails: (name: string) => {
    history.push(`/newfindmyrelative?q=${name}`, {})
    dispatch(searchName(name))
  }
})

export default connect<null, DispatchFromProps, HomepageProps>(
  null,
  mapDispatchToProps
)(Homepage)
