export default [
  {
    component: () => import('./index'),
    name: 'dashboard',
    path: '/',
    exact: true,
    icon: 'dashboard',
    title: '仪表盘'
  }
]