# Bitcoin Lemonade Stand

## Overview

This application creates a simple UI for tracking Bitcoin payments to a list of provided addresses. To get started, clone this repo and run:

```javascript
npm i
npm start
```

And your page will be served at http://localhost:3000

## Features
* Regularly updating Bitcoin price in USD
* Websocket subscription to new transactions for a given address from [Blockchain.info](https://blockchain.info/api/api_websocket)
* Ability to add multiple addresses
* Tracking of transaction time & data
* Conversion & update of transaction price

## Tech used
* React
* Redux
* Websockets

## Todos
* Add ability to create new receiving addresses with the [Blockchain.info](https://blockchain.info/api/api_receive) API or find a workaround with [Blockonomics](https://www.blockonomics.co/views/api.html)

![site picture](https://raw.githubusercontent.com/djrobinson/blockchain-lemonade/master/public//payment-tracker.png "Bitcoin Lemonade")

