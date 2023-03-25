import { TagsOutlined } from '@ant-design/icons'
import { createRouter } from '@/config/routes'

export default createRouter([
  {
    component: () => import(/* webpackChunkName: "useState" */ './index'),
    icon: <TagsOutlined />,
    title: 'useState',
    path: '/useState'
  }
])
