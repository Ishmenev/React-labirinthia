import React, {Component} from "react";
import Loader from "../components/Loader/Loader";
import Account from "../pages/Account";
import Page404 from "../pages/Page404";
import { connect } from 'react-redux';
import {getMainData} from '../actions/main';

class AccountContainer extends Component {
    
  componentDidMount() {    
      this.props.getMainData();
  }
    
  render() {
    const {isFetching, user} = this.props;
      
    let content = null;

    if (user) {
      content = <Account
        user={user}
      />
    }
    
    else if (isFetching) {
      content = <Loader/>;
    }
    
    else {
      content = <Page404/>;
    }
    
    
    return (
      content
    )        
  }
}

const mapStateToProps = state => {
  return {
    user: state.account.user,
    isFetching: state.main.isFetching
  }
}

export default connect(mapStateToProps, {getMainData})(AccountContainer)