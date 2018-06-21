import Loading from 'components/Loading';
import Loadable from 'react-loadable';

const routes = [
  'dashboard',
  'blog',
  'tag'
].map(path => require(`pages/${path}/router.js`).default);

export default $$.flatten(routes)
  .map(route => ({
    ...route,
    component: Loadable({
      loader: route.component,
      loading: Loading
    })
  }));