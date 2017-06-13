export default (state = {}, action) => {
  const test = 'test';
  console.log('Transaction reducer?');
  return {
    ...state,
    test
  }
}