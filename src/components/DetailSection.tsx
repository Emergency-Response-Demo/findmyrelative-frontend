import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../redux/reducers'
import LoadingSpinner from './LoadingSpinner'
import DisplayList from './DisplayList'
import FailAlert from './FailAlert'

type DisplaySectionProps = RootState['details'];

const DisplaySection: React.FC<DisplaySectionProps> = ({
  isFetching,
  isSuccessful,
  data
}) => {
  if (isFetching) {
    return <LoadingSpinner />
  }
  if (isSuccessful) {
    return <DisplayList data={data} />
  }
  return <FailAlert />
}

const mapStateToProps = (state: RootState): DisplaySectionProps => {
  return state.details
}

export default connect(mapStateToProps)(DisplaySection)
