export default (state = null, action) => {
  if (action.type === 'PRICE_SUCCESS') {
    const price = action.data.USD.last;
    return price;
  }
  return state;
}