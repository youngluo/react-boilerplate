import Loading from 'components/Loading';
import Loadable from 'react-loadable';

let routes = [];

['dashboard']
  .forEach((path) => {
    routes = routes.concat(require(`pages/${path}/router.js`).default);
  });

export default routes
  .map(route => ({
    ...route,
    component: Loadable({
      loader: route.component,
      loading: Loading
    })
  }));
