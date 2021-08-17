import { NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import routes from '@/config/routes'

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
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        </Item>
      ))}
    </Menu>
  )
}

export default MenuNav