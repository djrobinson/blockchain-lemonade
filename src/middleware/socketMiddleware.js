import actions from '../state/actions'

const socketMiddleware = () => {
  var socket = null;

  const onOpen = (ws,store) => evt => {
    console.log('Websocket Opened', ws);
  }

  const onClose = (ws,store) => evt => {
    console.log('Websocket Closed', ws);
  }

  const onMessage = (ws,store) => evt => {
    var msg = JSON.parse(evt.data);
    console.log("Message: ", msg);
    switch(msg.op) {
      case "utx":
        console.log('Websocket Opened');
        store.dispatch(actions.receivedTransaction(msg.x));
        break;
      default:
        console.log("Received unknown message type: ");
        break;
    }
  }

  return store => next => action => {
    switch(action.type) {
      case 'CONNECT':
        if(socket != null) {
          socket.close();
        }
        console.log('Connecting');
        socket = new WebSocket(action.url);
        socket.onmessage = onMessage(socket,store);
        socket.onclose = onClose(socket,store);
        socket.onopen = onOpen(socket,store);
        break;

      case 'DISCONNECT':
        if(socket != null) {
          socket.close();
        }
        socket = null;
        console.log("Disconnect");
        break;
      case 'PING':
        console.log("Ping");
        socket.send('{"op":"ping"}');
        break;
      case 'SUBSCRIBE_ADDRESS':
        console.log("Adding address from middleware", action.data);
        socket.send('{"op":"addr_sub", "addr":"'+ action.data + '"}')
        return next(action);
      default:
        return next(action);
    }
  }
};

export default socketMiddleware;