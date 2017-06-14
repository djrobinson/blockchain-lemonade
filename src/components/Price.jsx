import React from 'react';

const Price = props => {
  return (
    <div className="price-block">
        <h2>Bitcoin Price: ${props.price}</h2>
    </div>
  )
}

export default Price;