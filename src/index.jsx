import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routers from './router';
import 'antd/dist/antd.less';
import './index.scss';
import './services/mockData' // 导入模拟数据

// store.subscribe(() => { //监听state变化
//     console.log(store.getState())
// });

ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept();
}

