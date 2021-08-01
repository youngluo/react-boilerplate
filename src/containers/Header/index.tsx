import { Layout, Dropdown, Menu } from 'antd'
import styles from './index.scss'

const { Header } = Layout
const { Item } = Menu
const menuItems = [
  {
    icon: 'user',
    text: '个人中心'
  },
  {
    icon: 'logout',
    text: '退出登录'
  }
]
const menu = (
  <Menu style={{ width: 160 }}>
    {menuItems.map((item) => (
      <Item key={item.icon}>
        <span>
          {/* <Icon
            style={{ marginRight: 8 }}
            type={item.icon}
          /> */}
          <span>{item.text}</span>
        </span>
      </Item>
    ))}
  </Menu>
)

export default function NewHeader() {
  return (
    <Header style={{ background: '#fff' }}>
      <div style={{ float: 'right', height: '100%' }}>
        <Dropdown overlay={menu}>
          <div className={styles.link}>
            <span>Hover me</span>
            {/* <Icon
              style={{ marginLeft: 8 }}
              type="down"
            /> */}
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}