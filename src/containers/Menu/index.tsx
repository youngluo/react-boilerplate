import { NavLink, useLocation } from 'react-router-dom'
import routes from '@/config/routes'
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
      {routes.map((item) => (
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