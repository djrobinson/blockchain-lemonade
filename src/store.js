import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import transactionsReducer from './state/transactionsReducer.js';

const rootReducer = combineReducers({
  transactions: transactionsReducer
});

const store = compose(applyMiddleware(thunkMiddleware))(createStore)(rootReducer);

export default store;