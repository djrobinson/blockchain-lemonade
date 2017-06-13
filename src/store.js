import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import socketMiddleware from './middleware/socketMiddleware.js';
import actions from './state/actions';

import transactionsReducer from './state/transactionsReducer.js';

const rootReducer = combineReducers({
  transactions: transactionsReducer
});

const middleware = [ thunk, socketMiddleware() ];
middleware.push(createLogger());

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

store.dispatch(actions.connectToSocket('wss://ws.blockchain.info/inv'));

export default store;