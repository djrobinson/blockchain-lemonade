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
    }
  }
}