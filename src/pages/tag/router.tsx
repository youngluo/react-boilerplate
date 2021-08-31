import { TagsOutlined } from '@ant-design/icons'

export default [
  {
    component: () => import('./index'),
    icon: <TagsOutlined />,
    title: '标签管理',
    path: '/tag'
  }
]
