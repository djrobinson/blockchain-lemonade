export default (state = [], action) => {
  if (action.type === 'SUBSCRIBE_ADDRESS') {
    const addresses = [action.data, ...state];
    return addresses;
  }
  return state;
}