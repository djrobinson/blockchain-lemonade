import request from 'superagent';

import getPrice from './ActionRequests/getPrice';

const actions = {
    priceError: () => ({
        type: 'PRICE_FAILURE'
    }),
    successfulPrice: data => ({
        type: 'PRICE_SUCCESS',
        data
    })
};

const fireGet = (requestModel) => {
    request
        .get(requestModel.getRoute)
        .set('Accept', 'application/json')
        .end(requestModel.requestEnd);
};

const firePost = (requestModel) => {
    request
        .post(requestModel.postRoute)
        .send(requestModel.postModel)
        .set('Accept', 'application/json')
        .end(requestModel.requestEnd);
};

const thunks = {
    getPrice: () => {
        return (dispatch, getState) => {
            const requestModel = getPrice(dispatch);
            fireGet(requestModel);
        };
    },
};

export default {...actions, ...thunks};