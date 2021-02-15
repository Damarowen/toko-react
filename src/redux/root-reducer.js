
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

//*from redux persistent
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //* this is localStorage
import directoryReducer from './directory/directory.reducer'


//*set up redux persistent 
const persistConfig = {
  key: 'root',
  storage,
  //* set which one to persist from reducer
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer)