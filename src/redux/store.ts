import { createStore, combineReducers } from 'redux';
// import * as reducers from './reducer';

// 创建一个 Redux store 来存放应用中所有的 state，应用中有且仅有一个 store。
const store = createStore(
  combineReducers({})
);

export default store;