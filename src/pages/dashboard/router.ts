export default [
  {
    name: 'dashboard',
    path: '/',
    exact: true,
    component: () => import('./index')
  }
];