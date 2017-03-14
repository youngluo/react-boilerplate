import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './router';
import { AppContainer } from 'react-hot-loader';

import './index.scss';

// store.subscribe(() => { //监听state变化
//     console.log(store.getState())
// });

const render = (() => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Routes />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
})();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router', () => {
        render();
    });
}

