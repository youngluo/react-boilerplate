import { Link, withRouter } from 'react-router-dom';
// import nav from 'config/router-nav';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'UI';
import React from 'react';

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;

  return last ? <span>{route.title}</span> : <Link to={paths.join('/')}>{route.title}</Link>;
}

function getRoutes(location) {
  return location.pathname.split('/')
    .map(route => ({ path: `/${route}`, name: route }));
}

function NewBreadcrumb({ location }) {
  return (
    <Breadcrumb
      routes={getRoutes(location)}
      itemRender={itemRender}
    />
  );
}

NewBreadcrumb.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(NewBreadcrumb);