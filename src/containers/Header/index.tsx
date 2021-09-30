import {
  CaretDownOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { Layout, Dropdown, Menu } from 'antd'
import styles from './index.scss'

const { Header } = Layout
const { Item } = Menu
const menuItems = [
  {
    icon: <UserOutlined />,
    text: '个人中心'
  },
  {
    icon: <LogoutOutlined />,
    text: '退出登录'
  }
]

const menu = (
  <Menu style={{ width: 160 }}>
    {menuItems.map((item) => (
      <Item key={item.text}>
        <span>
          {item.icon}
          <span>{item.text}</span>
        </span>
      </Item>
    ))}
  </Menu>
)

export default function NewHeader() {
  return (
    <Header style={{ background: '#fff' }}>
      <div style={{ height: '100%', float: 'right' }}>
        <Dropdown overlay={menu}>
          <div className={styles.link}>
            <span>Hover me</span>
            <CaretDownOutlined style={{ marginLeft: 8 }} />
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}
