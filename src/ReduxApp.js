import { connect } from 'react-redux';

import stateToProps from './state/stateToProps.js';
import dispatcher from './state/dispatcher.js';

import App from './App.js';

const ReduxApp = connect(stateToProps, dispatcher)(App);

export default ReduxApp;