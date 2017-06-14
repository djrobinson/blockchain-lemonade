export default (state, props) => {
  console.log('State: ', state);
  return {
    test: state.transactions.test,
    price: state.price,
    addresses: state.addresses
  }
}