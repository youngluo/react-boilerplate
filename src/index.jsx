import { Provider } from 'react-redux';
import Root from 'components/Root';
import ReactDOM from 'react-dom';
import React from 'react';
import 'config/http.config.js';
import store from './redux/store';
import './index.scss';

require('es6-promise').polyfill();

// store.subscribe(() => { //监听state变化
//     console.log(store.getState())
// });

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
