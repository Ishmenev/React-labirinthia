import { combineReducers } from 'redux';
import main from './main';
import games from './games';
import account from './account';
import user from './user';

export default combineReducers({
  main,
  games,
  account,
  user
})

// const reducer = (state, action) => {
//   return {
//     main: main(state, action),
//     games: games(state, action),
//     account: account(state, action)
//   }

// }

// export default reducer;