import { NavLink, useLocation } from 'react-router-dom'
import navData from '@/config/router-nav'
import { Menu } from 'antd'

const { Item } = Menu
const MenuNav = () => {
  const { pathname } = useLocation()

  return (
    <Menu
      selectedKeys={[pathname]}
      mode="inline"
      theme="dark"
    >
      {navData.map((item) => (
        <Item key={item.path}>
          <NavLink to={item.path}>
            {/* <Icon type={item.icon} /> */}
            <span>{item.title}</span>
          </NavLink>
        </Item>
      ))}
    </Menu>
  )
}

export default MenuNav