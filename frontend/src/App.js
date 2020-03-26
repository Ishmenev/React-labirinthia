import React, {Component} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GamesContainer from './containers/GamesContainer';
import AccountContainer from './containers/AccountContainer';
import Start from './pages/Start';
import ProtectedPage from './pages/ProtectedPage';
import Page404 from './pages/Page404';
import LoginError from './pages/LoginError';
import OwnLevel from './pages/OwnLevel';
import MainContainer from './containers/MainContainer';
import { connect } from 'react-redux';
import './bootstrap.min.css';
import './style.css';

const PrivateRoute = ({component: Component, store, path}) => {
  return <Route path={path}
    render={props => {
      return store ? <Component {...props}/> : <ProtectedPage/>
    }
  }/>
}

class App extends Component {

  render() {
    return (
      <div className='wrapper'>
        <div className='sections'>
          <Router>
            <Route path='/' component={Header}/>
              <Switch>
                <Route exact path='/' component={MainContainer}/>
                <Route path='/games/' component={GamesContainer} />
                <PrivateRoute 
                  path='/account/' 
                  store={this.props.user} 
                  component={AccountContainer} />
                <PrivateRoute 
                  path='/creativity/' 
                  store={this.props.user} 
                  component={OwnLevel} />
                <Route path='/start/' component={Start}/>
                <Route path='/error/' component={LoginError}/>
                <Route component={Page404}/>
              </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );      
  }
}

const mapStateToProps = state => {
  return {
      user: state.user.isAuth
  }
}

export default connect(mapStateToProps)(App)










