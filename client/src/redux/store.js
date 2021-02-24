import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//* from react persistent
import { persistStore } from 'redux-persist'
 
//* apply middleware
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const storePersist = persistStore(store)

