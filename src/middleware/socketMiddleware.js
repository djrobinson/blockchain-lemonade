import actions from '../state/actions'

const socketMiddleware = () => {
  var socket = null;

  const onOpen = (ws,store) => evt => {
    //Send a handshake, or authenticate with remote end

    //Tell the store we're connected
    // store.dispatch(actions.connected());
    console.log('Websocket Opened', ws);

  }

  const onClose = (ws,store) => evt => {
    //Tell the store we've disconnected
    // store.dispatch(actions.disconnected());
  }

  const onMessage = (ws,store) => evt => {
    //Parse the JSON message received on the websocket
    var msg = JSON.parse(evt.data);
    console.log("Message: ", msg);
    switch(msg.type) {
      case "CHAT_MESSAGE":
        //Dispatch an action that adds the received message to our state
        console.log('Websocket Opened');
        break;
      default:
        console.log("Received unknown message type: ");
        break;
    }
  }

  return store => next => action => {
    switch(action.type) {

      //The user wants us to connect
      case 'CONNECT':
        //Start a new connection to the server
        if(socket != null) {
          socket.close();
        }
        //Send an action that shows a "connecting..." status for now
        console.log('Connecting');

        //Attempt to connect (we could send a 'failed' action on error)
        socket = new WebSocket(action.url);
        socket.onmessage = onMessage(socket,store);
        socket.onclose = onClose(socket,store);
        socket.onopen = onOpen(socket,store);

        break;

      //The user wants us to disconnect
      case 'DISCONNECT':
        if(socket != null) {
          socket.close();
        }
        socket = null;

        //Set our state to disconnected
        console.log("Disconnect");
        break;

      //Send the 'SEND_MESSAGE' action down the websocket to the server
      case 'PING':
        console.log("Sending ping: ", socket);
        socket.send('{"op":"addr_sub", "addr":"1JWj61zs5a2mpg56oXPePeJ3YMvCZwjvoF"}')
        break;

      //This action is irrelevant to us, pass it on to the next middleware
      default:
        return next(action);
    }
  }
};

export default socketMiddleware;