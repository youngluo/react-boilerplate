import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './router'; //路由配置
import store from './redux/store';

import './index.scss';

// store.subscribe(() => { //监听state变化
//     //console.log(store.getState())
// });

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('app')
);

