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
              <h2>Sam's Lemonade Payment Portal</h2>
            </Col>
            <Col lg={6}>
              <div className="App-button">
                <Price price={this.props.price} />
              </div>
            </Col>
          </Row>
          <Row className="control-bar">
              <AddressForm handleSubmit={this.addAddress} />
              {
                (this.props.error === 'ADDRESS_EXISTS') && (
                    <h4>Address subscription already exists</h4>
                )
              }
              {
                (this.props.error === 'NULL_ADDRESS') && (
                    <h4>Please enter an address</h4>
                )
              }
          </Row>
          <Row>

          </Row>
          <Row className="addresses-title">
            <h3>Subscribed Addresses:</h3>
          </Row>
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