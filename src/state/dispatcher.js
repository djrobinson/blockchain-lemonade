import actions from './actions';

export default (dispatch) => {
  return {
    getPrice() {
      dispatch(actions.getPrice());
    },
    connectToSocket() {
      dispatch(actions.connectToSocket());
    },
    ping() {
      dispatch(actions.ping());
    },
    addAddress(data) {
      dispatch(actions.addAddress(data))
    },
    sendTestTransaction() {
      dispatch(actions.sendTestTransaction());
    }
  }
}