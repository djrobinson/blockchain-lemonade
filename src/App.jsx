import React, { Component } from 'react';

import Transactions from './components/Transactions.jsx';
import Websockets from './components/Websockets'
import SampleSocket from './components/Websocket.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h2>Sams Lemonade Stand</h2>
          </div>
          <p className="App-intro">
            {this.props.test}
          </p>
          <button onClick={this.props.ping}>
            Haldo
          </button>
        </div>

    );
  }
}

export default App;
