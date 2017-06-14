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
    setInterval(() => this.props.getPrice(), 10000);
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
              <h2>Title</h2>
            </div>
            <div className="App-button">
              <Price price={this.props.price} />
            </div>
          </div>
          <Row className="control-bar">
              <AddressForm handleSubmit={this.addAddress} />
          </Row>
          {
            this.props.addresses.map((address) => {
              return (
                <Row key={address} className="address-row" >
                  <Col md={4} className="address-block" >
                    <Addresses address={address} />
                  </Col>
                  <Col md={8} className="transactions-block" >
                    <Transactions
                      transactions={this.props.transactions[address] || []}
                      price={this.props.price}
                    />
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