import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect, IndexRedirect, hashHistory } from 'react-router';
import Root from '../components/layout';
import dashboard from '../pages/dashboard';

// const chooseProducts = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../Component/chooseProducts').default)
//     }, 'chooseProducts')
// }

const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Root}>
            <IndexRedirect to="dashboard" />
            <Route path="dashboard" component={dashboard} />
            {/*<Route path="applyRecord" getComponent={applyRecord} />*/}
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

export default RouteConfig;