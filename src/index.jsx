import 'utils';
import DynamicModal from 'containers/DynamicModal';
import { Provider } from 'react-redux';
import Root from 'containers/Root';
import ReactDOM from 'react-dom';
import 'config/http.config.js';
import React from 'react';
import 'babel-polyfill';
import store from './redux/store';
import './index.less';

window.DynamicModal = DynamicModal;

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}