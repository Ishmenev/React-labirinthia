import React, {Component} from 'react'
import Loader from '../components/Loader/Loader'
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator'
import {connect} from 'react-redux'
import {getMainData} from '../actions/main'


class LoaderContainer extends Component {

  componentDidMount() {
    this.props.getMainData()
  }

  render() {

    if(this.props.isFetching === true) {
      return <Loader/>
    } else if (this.props.isFetching === false && this.props.news == null) {
      return <ErrorIndicator/>
    }

    return (
      this.props.children
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.main.data.news,
    isFetching: state.main.isFetching,
    errorStatus: state.main.errorStatus
  }
}

export default connect(mapStateToProps, {getMainData})(LoaderContainer)