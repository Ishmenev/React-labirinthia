import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Route, Switch, Router} from 'react-router-dom';
import Main from './containers/Main';
import createHistory from 'history/createBrowserHistory';
import './bootstrap.min.css';
import styles from './App.module.scss';
const history = createHistory(); 

function App() {
  return (
    <div className={styles.body}> 
      <Header/>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Main}/>
            {/* <Route path='/games' component={Games}/> */}
          </Switch>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;  
