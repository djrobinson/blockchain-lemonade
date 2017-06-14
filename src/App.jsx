import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import Transactions from './components/Transactions.jsx';
import AddressForm from './components/AddressForm.jsx';
import Price from './components/Price.jsx';
import Addresses from './components/Addresses.jsx';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.addAddress = this.addAddress.bind(this);
  }
  componentWillMount() {
    this.props.getPrice();
  }
  addAddress(address) {
    console.log("Address", address);
    this.props.addAddress();
  }
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
          <Row>
            <Col md={6}>
              <AddressForm handleSubmit={this.addAddress} />
            </Col>
            <Col md={6}>
              <Price price={this.props.price} />
            </Col>
          </Row>
          {
            this.props.addresses.map((address) => {
              return (
                <Row key={address} >
                  <Col md={6}>
                    <Addresses address={address} />
                  </Col>
                  <Col>
                    <Transactions address={address} transactions={this.props.transactions[address] || []} />
                  </Col>
                </Row>
              );
            })
          }
          <div onClick={this.props.sendTestTransaction}>
            Test Transaction
          </div>
        </div>

    );
  }
}

export default App;