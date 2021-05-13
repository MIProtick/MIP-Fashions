import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import RootReducer from './RootReducer';

const middlewares = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);


const defStore = { store, persistor }
export default defStore;