import Bundle from 'components/Bundle';
import React from 'react';

let routes = [];

['dashboard']
  .forEach((path) => {
    routes = routes.concat(require(`pages/${path}/router.js`).default);
  });

export default routes
  .map(route => ({
    ...route,
    component: props => (
      <Bundle load={route.component}>
        {Comp => <Comp {...props} />}
      </Bundle>
    )
  }));
