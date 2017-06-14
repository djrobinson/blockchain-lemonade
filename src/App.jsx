import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import Transactions from './components/Transactions.jsx';
import AddressForm from './components/AddressForm.jsx';
import Price from './components/Price.jsx';
import Addresses from './components/Addresses.jsx';

import './App.css';

const testSubmit = () => {
  console.log("Testing a submit");
}

class App extends Component {
  componentWillMount() {
    this.props.getPrice();
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
              <AddressForm handleSubmit={testSubmit} />
            </Col>
            <Col md={6}>
              <Price price={this.props.price} />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Addresses />
            </Col>
            <Col>
              <Transactions />
            </Col>
          </Row>
        </div>

    );
  }
}

export default App;