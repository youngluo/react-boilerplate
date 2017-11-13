import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import Router from './config/router.config';
import store from './redux/store';
import './index.scss';

// store.subscribe(() => { //监听state变化
//     console.log(store.getState())
// });

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
