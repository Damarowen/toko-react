
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

//*from redux persistent
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //* this is localStorage

//*set up redux persistent 
const persistConfig = {
  key: 'root',
  storage,
  //* set which one to persist from reducer
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer)