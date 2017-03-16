import React from 'react';
import { Router, Route, Redirect, IndexRedirect, hashHistory } from 'react-router';
import Root from '../components/layout';
import Dashboard from '../pages/dashboard';

const User = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/user').default)
    }, 'user')
}

const routes = (
    <Route path="/" component={Root}>
        <IndexRedirect to="dashboard" />
        <Route path="dashboard" component={Dashboard} />
        <Route path="user" getComponent={User} />
        <Redirect from='*' to='/' />
    </Route>
);

export default () => <Router history={hashHistory} routes={routes} />;