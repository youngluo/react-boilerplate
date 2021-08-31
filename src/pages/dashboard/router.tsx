import { DashboardOutlined } from '@ant-design/icons'

export default [
  {
    component: () => import('./index'),
    icon: <DashboardOutlined />,
    name: 'dashboard',
    title: '仪表盘',
    exact: true,
    path: '/'
  }
]
