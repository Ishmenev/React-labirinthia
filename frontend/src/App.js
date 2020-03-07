import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Router, Route, Switch} from 'react-router-dom';
import GamesContainer from './containers/GamesContainer';
import AccountContainer from './containers/AccountContainer';
import Start from './pages/Start';
import OwnLevel from './pages/OwnLevel';
import MainContainer from './containers/MainContainer';
import createHistory from 'history/createBrowserHistory';
import './bootstrap.min.css';
import './style.css';
const history = createHistory();

function App() {

  
  return (
    <div className='wrapper'>
      <div className='sections'>
        <Router history={history}>
          <Header/>
            <Switch>
              <Route exact path='/' component={MainContainer}/>
              <Route path='/games/:all?' component={GamesContainer} />
              <Route path='/account' component={AccountContainer}/>
              <Route path='/creativity' component={OwnLevel}/>
              <Route path='/start' component={Start}/>
            </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;  
