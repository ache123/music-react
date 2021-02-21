import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import thunkMiddleware from 'redux-thunk'

import reducer from './reducer.js';


const storeEnhance = applyMiddleware(thunkMiddleware);

const composeEnhancers = composeWithDevTools({});

const store = createStore(reducer, composeEnhancers(storeEnhance));






export default store;