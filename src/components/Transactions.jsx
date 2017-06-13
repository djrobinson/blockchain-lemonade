import React from 'react';
import { Event } from 'react-socket-io';

export default class MyComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onMessage = this.onMessage.bind(this);
    }

    onMessage(message) {
        console.log(message);
    }

    render() {
        return (
            <div>
                <h1>Bitcoin Sockets</h1>
                <h2>{this.props.price}</h2>
                <Event event='eventName' handler={this.onMessage} />
            </div>
        );
    }
}