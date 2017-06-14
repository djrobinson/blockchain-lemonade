import React from 'react';
import Moment from 'moment';

const Transactions = props => {
  return (
    <div className="transactions-row">
        {
            props.transactions.map(transaction => {
                return (
                    <div className="transaction" key={transaction.hash} >
                        <p>{Moment.unix(transaction.time).format('LLL')}</p>
                        <h4>Transaction Amount</h4>
                        <h2>{transaction.out[0].value}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Transactions;