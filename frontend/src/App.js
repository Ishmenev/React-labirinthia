import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Router, Route, Switch} from 'react-router-dom';
import GamesContainer from './containers/GamesContainer';
import AccountContainer from './containers/AccountContainer';
import Start from './pages/Start';
import Page404 from './pages/Page404';
import OwnLevel from './pages/OwnLevel';
import MainContainer from './containers/MainContainer';
import createHistory from 'history/createBrowserHistory';
import './bootstrap.min.css';
import './style.css';
const history = createHistory();

function App({store}) {
 
  
  return (
    <div className='wrapper'>
      <div className='sections'>
        <Router history={history}>
          <Header/>
            <Switch>
              <Route exact path='/' component={MainContainer}/>
              <Route path='/games/:all?' component={GamesContainer} />
              <PrivateRoute path='/account' component={AccountContainer} store={store}/>
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


const PrivateRoute = ({component: Component, store}) => {

  // пользователь авторизован
  if (checkUserAuth(store)) {
    return <Component/>
  }

  else {
    return <Page404/>
  }
  
}

const checkUserAuth = (store) => {
  console.log('checkUserAuth', store.getState().user.isAuth)
  // проверяем факт авторизации пользователя, в будущем добавим запрос на сервер, проверяющий токен
  return store.getState().user.isAuth
}
