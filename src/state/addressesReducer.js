export default (state = [], action) => {
  if (action.type === 'ADD_ADDRESS') {
    const addresses = [action.data, ...state];
    return addresses;
  }
  return state;
}