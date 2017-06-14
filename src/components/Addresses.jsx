import React from 'react';

const Addresses = props => {
  return (
    <div>
      <h2>{props.address}</h2>
      <img src={"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + props.address} />
    </div>
  )
}

export default Addresses;
