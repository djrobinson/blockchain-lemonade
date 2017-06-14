import request from 'superagent';

import getPrice from './ActionRequests/getPrice';

const actions = {
    connectToSocket: url => ({
        type: 'CONNECT',
        url
    }),
    ping: () => ({
        type: 'PING'
    }),
    priceError: () => ({
        type: 'PRICE_FAILURE'
    }),
    successfulPrice: data => ({
        type: 'PRICE_SUCCESS',
        data
    }),
    pushAddress: data => ({
        type: 'ADD_ADDRESS',
        data
    }),
    subscribeAddress: data => ({
        type: 'SUBSCRIBE_ADDRESS',
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
    getAddressbalance: () => {
        return (dispatch, getState) => {
            const requestModel = {};
        }
    },
    addAddress: () => {
        return (dispatch, getState) => {
            const address = getState().form.address.values.address1;
            dispatch(actions.subscribeAddress(address));
            dispatch(actions.pushAddress(address));
        }
    }
};

export default {...actions, ...thunks};