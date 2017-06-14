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
            <div className="App-title">
              <h2>Sams Lemonade Stand</h2>
            </div>
            <div className="App-button">
              <h5>Generate Wallet</h5>
            </div>
            <div className="App-button">
              <h5>Track Payments</h5>
            </div>
          </div>
          <AddressForm handleSubmit={testSubmit} />
          <img src="https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=1EtWbeb6k8FDHPQufFxtSXSR89XhebYPYh" />
          <button onClick={this.props.ping}>
            Haldo
          </button>
        </div>

    );
  }
}

export default App;
