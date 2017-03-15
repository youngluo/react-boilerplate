import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routing from './router';

import './index.scss';

// store.subscribe(() => { //监听state变化
//     console.log(store.getState())
// });

ReactDOM.render(
    <Provider store={store}>
        <Routing />
    </Provider>,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept();
}

