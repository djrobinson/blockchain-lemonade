import React, { Component } from 'react';

import Transactions from './components/Transactions.jsx';

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
          <button onClick={this.props.getPrice}>
            Haldo
          </button>
          <Transactions price={2699.99} />
        </div>

    );
  }
}

export default App;
