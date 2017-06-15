export default (state = null, action) => {
  if (action.type === 'PRICE_SUCCESS') {
    const price = action.data.USD.last;
    return price;
  }
  if (action.type === 'PRICE_FAILURE') {
    const price = 'N/A';
    return price;
  }
  return state;
}