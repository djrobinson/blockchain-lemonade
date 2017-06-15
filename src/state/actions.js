import request from 'superagent';

import getPrice from './ActionRequests/getPrice';

import mocktransaction from './mockdata/mocktransaction.js';

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
    subscribeAddress: data => ({
        type: 'SUBSCRIBE_ADDRESS',
        data
    }),
    receivedTransaction: data => ({
        type: 'RECEIVED_TRANSACTION',
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

let mockIterator = 0;

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
            const currentAddresses = getState().addresses;
            const address = getState().form.address;
            if (address && address.values && currentAddresses.indexOf(address.values.address1) === -1) {
                dispatch(actions.subscribeAddress(address.values.address1));
            }
        }
    },
    sendTestTransaction: () => {
        return (dispatch) => {
            dispatch(actions.receivedTransaction(mocktransaction[mockIterator]));
            mockIterator++;
        }
    }
};

export default {...actions, ...thunks};