import { NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { FC } from 'react'
import type { IRouter } from '@/config/routes'

const { Item } = Menu

interface IProps {
  routes: IRouter[]
}

const MenuNav: FC<IProps> = ({ routes = [] }) => {
  const { pathname } = useLocation()

  return (
    <Menu selectedKeys={[pathname]} mode="inline" theme="dark">
      {routes.map((route) => (
        <Item key={route.path}>
          <NavLink to={route.path}>
            {route.icon}
            <span>{route.title}</span>
          </NavLink>
        </Item>
      ))}
    </Menu>
  )
}

export default MenuNav
