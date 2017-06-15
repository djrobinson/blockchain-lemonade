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
          <Row className="App-header">
            <Col lg={6} className="App-title">
              <h2>Sams Lemonade Stand</h2>
            </Col>
            <Col lg={6}>
              <div className="App-button">
                <Price price={this.props.price} />
              </div>
            </Col>
          </Row>
          <Row className="control-bar">
              <AddressForm handleSubmit={this.addAddress} />
          </Row>
          <div onClick={this.props.sendTestTransaction}>
            Test Transaction
          </div>
          <Row className="address-row" >
            {
              this.props.addresses.map((address) => {
                return (
                  <Col lg={4} key={address} >
                    <Addresses address={address} />
                    <Transactions
                      transactions={this.props.transactions[address] || []}
                      price={this.props.price}
                    />
                  </Col>
                );
              })
            }
          </Row>
        </div>

    );
  }
}

export default App;