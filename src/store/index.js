import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk'

import reducer from './reducer.js';


const storeEnhance = applyMiddleware(thunkMiddleware);

// 使用Redux DevTools写法
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers(storeEnhance));


export default store;