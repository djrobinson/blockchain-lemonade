import React, { Component } from 'react';

import Transactions from './components/Transactions.jsx';
import AddressForm from './components/AddressForm.jsx';

import './App.css';

const testSubmit = () => {
  console.log("Testing a submit");
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h2>Sams Lemonade Stand</h2>
          </div>
          <AddressForm handleSubmit={testSubmit} />
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
