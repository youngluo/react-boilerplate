import React from 'react';
import { Router, Route, Redirect, IndexRedirect, hashHistory } from 'react-router';
import Root from '../components/layout';
import Dashboard from '../pages/dashboard';

const User = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/user').default)
    }, 'user')
}

const Article = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/article').default)
    }, 'article')
}

const routes = (
    <Route path="/" component={Root}>
        <IndexRedirect to="dashboard" />
        <Route path="dashboard" component={Dashboard} />
        <Route path="user" getComponent={User} />
        <Route path="article" getComponent={Article} />
        <Redirect from='*' to='/' />
    </Route>
);

export default () => <Router history={hashHistory} routes={routes} />;