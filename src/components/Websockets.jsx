import React from 'react';
import { Socket } from 'react-socket-io';

const uri = 'wss://ws.blockchain.info/inv';
const options = { transports: ['polling', 'websocket'] };

export default class AppContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Socket uri={uri} options={options}>
                { this.props.children }
            </Socket>
        );
    }
}