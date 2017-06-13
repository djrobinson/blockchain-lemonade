import actions from './actions';

export default (dispatch) => {
  return {
    testdispatch() {
      dispatch(actions.testaction());
    }
  }
}