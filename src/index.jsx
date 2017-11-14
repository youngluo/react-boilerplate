import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import Layout from 'components/Layout';
import store from './redux/store';
import './index.scss';

// store.subscribe(() => { //监听state变化
//     console.log(store.getState())
// });

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
