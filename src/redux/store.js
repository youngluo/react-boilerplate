import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducer';

// 创建一个 Redux store 来存放应用中所有的 state，应用中有且仅有一个 store。
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);

export default store;
