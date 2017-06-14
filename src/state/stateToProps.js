export default (state, props) => {
  console.log('State: ', state);
  return {
    transactions: state.transactions,
    price: state.price,
    addresses: state.addresses
  }
}