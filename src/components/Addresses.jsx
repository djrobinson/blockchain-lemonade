import React from 'react';

const Addresses = props => {
  return (
    <div>
      <h5>{props.address}</h5>
      <img src={"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + props.address} />
    </div>
  )
}

export default Addresses;
