import { TagsOutlined } from '@ant-design/icons'
import { createRouter } from '@/config/routes'

export default createRouter([
  {
    component: () => import('./index'),
    icon: <TagsOutlined />,
    title: '标签管理',
    path: '/tag'
  }
])
