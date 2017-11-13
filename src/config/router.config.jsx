import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from 'pages/dashboard';
import Root from 'components/layout';
import React from 'react';

const User = (location, cb) => {
  require.ensure(
    [],
    (require) => {
      cb(null, require('../pages/user').default);
    },
    'user'
  );
};

const Article = (location, cb) => {
  require.ensure(
    [],
    (require) => {
      cb(null, require('../pages/article').default);
    },
    'article'
  );
};

export default <Router path="/" component={Root} />;
