import React from 'react';

const Addresses = props => {
  return (
    <div className="address-block">
      <img src={"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + props.address} />
      <h5>{props.address}</h5>
    </div>
  )
}

export default Addresses;
