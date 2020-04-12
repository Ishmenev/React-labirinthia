import React, {Component} from 'react'
import News from '../components/News/News'
import Levels from '../components/Levels/Levels'
import Loader from '../components/Loader/Loader'
import {connect} from 'react-redux'
import {getMainData} from '../actions/main'


class LoaderContainer extends Component {

  componentDidMount() {
    this.props.getMainData()
  }

  render() {

    let content = null

    if(this.props.isFetching === false) {
      content = 
      <div>
        <Levels/>
        <News/>
      </div>
    } else {
      content = <Loader/>
    }

    return (
      content
    )
  }
}

const mapStateToProps = state => {
  return {
      isFetching: state.main.isFetching
  }
}

export default connect(mapStateToProps, {getMainData})(LoaderContainer)