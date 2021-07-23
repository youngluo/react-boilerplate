import Loading from '@components/Loading';
import Loadable from 'react-loadable';
import _ from 'lodash';

const routes = [
  'dashboard',
].map(path => require(`@pages/${path}/router.ts`));

export default _.flatten(routes)
  .map(route => ({
    ...route,
    component: Loadable({
      loader: route.component,
      loading: Loading
    })
  }));