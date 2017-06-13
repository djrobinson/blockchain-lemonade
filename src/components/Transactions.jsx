import React, {PropTypes} from 'react';

const Transactions = (props) => {
    return (
        <div className="transactions-block">
            <h2>Current Price</h2>
            {props.price}
        </div>
    );
};

export default Transactions;
