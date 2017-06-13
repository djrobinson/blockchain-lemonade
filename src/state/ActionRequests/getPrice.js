import actions from '../actions';

const searchProviders = (dispatch) => {

    const getRoute = `https://blockchain.info/ticker?cors=true`;

    const requestEnd = (err, res) => {
        if (err || !res.ok) {
            const errorDetail = 'An error occurred. Please try again later';
            dispatch(actions.priceError(errorDetail));
        } else {
            dispatch(actions.successfulPrice(res.body));
        }
    };

    return {getRoute, requestEnd};
};
export default searchProviders;