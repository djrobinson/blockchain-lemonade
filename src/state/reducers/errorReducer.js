export default (state = [], action) => {
  if (action.type === 'NULL_ADDRESS') {
    const error = action.type;
    return error;
  }
  if (action.type === 'ADDRESS_EXISTS') {
    const error = action.type;
    return error;
  }
  return null;
}