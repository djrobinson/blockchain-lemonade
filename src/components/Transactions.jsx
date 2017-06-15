import React from 'react';
import Moment from 'moment';
import { Col, Row } from 'react-bootstrap';

const Transactions = props => {
  return (
    <div className="transactions-column">
        {
            props.transactions.map(transaction => {
                return (
                    <Row className="transaction" key={transaction.hash} >
                      <Col lg={6} className="time-box">
                        <p>{Moment.unix(transaction.time).format('lll')}</p>
                      </Col>
                      <Col lg={6} >
                        <h4>{transaction.out[0].value / 100000000} BTC</h4>
                        <h4>${(transaction.out[0].value / 100000000 * props.price).toFixed(2)}</h4>
                      </Col>
                    </Row>
                )
            })
        }
    </div>
  )
}

export default Transactions;