import { DashboardOutlined } from '@ant-design/icons'
import { createRouter } from '@/config/routes'

export default createRouter([
  {
    component: () => import(/* webpackChunkName: "dashboard" */ './index'),
    icon: <DashboardOutlined />,
    title: '仪表盘',
    exact: true,
    path: '/'
  }
])
