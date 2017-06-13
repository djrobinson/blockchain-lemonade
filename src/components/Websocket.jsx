import React from 'react';
  import Websocket from 'react-websocket';


  const uri = 'wss://ws.blockchain.info/inv';

  class SampleSocket extends React.Component {

    constructor(props) {
      super(props);
    }

    handleData(data) {
      console.log('Result: ', data);
    }

    render() {
      return (
        <div>
          <Websocket url='wss://ws.blockchain.info/inv'
              onMessage={this.handleData.bind(this)}
              reconnect={true}
              debug={true}
          />
        </div>
      );
    }
  }

  export default SampleSocket;