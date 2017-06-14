export default (state = {}, action) => {
  if (action.type === 'RECEIVED_TRANSACTION') {
    console.log("Action Data: ", action.data);
    const recipient = action.data.out[0].addr;
    const transactions = Object.assign({}, state);
    let recipientTransactions
    if (state[recipient]) {
      recipientTransactions = [action.data, ...state[recipient]];
    } else {
      recipientTransactions = [action.data];
    }
    transactions[recipient] = recipientTransactions;
    console.log("New State?", state);
    return transactions;
  }
  return state;
}