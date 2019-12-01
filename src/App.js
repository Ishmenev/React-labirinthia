import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Router, Route, Switch} from 'react-router-dom';
import Main from './containers/Main';
import Games from './pages/Games';
import Start from './pages/Start';
import Account from './pages/Account';
import OwnLevel from './pages/OwnLevel';
import createHistory from 'history/createBrowserHistory';
import './bootstrap.min.css';
import styles from './App.module.scss';
const history = createHistory();

function App() {
  return (
    <div className={styles.body}> 
      <Router history={history}>
        <Header/>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/games' component={Games}/>
            <Route path='/account' component={Account}/>
            <Route path='/creativity' component={OwnLevel}/>
            <Route path='/start' component={Start}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;  
