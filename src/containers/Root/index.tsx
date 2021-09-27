import { BrowserRouter, Route, Switch, NavLink, useLocation } from 'react-router-dom'
import { FC, Suspense, lazy, useState, useEffect } from 'react'
import { Menu, Layout } from 'antd'
import { loadModules } from '@/config/routes'
import Header from '@/containers/Header'
import NoMatch from '@/pages/404'
import styles from './index.scss'

const { Content, Sider } = Layout
const { Item } = Menu

const Root: FC = () => {
  const [routes, setRoutes] = useState<any[]>([])
  const { pathname } = useLocation()

  useEffect(() => {
    loadModules()
      .then((modules) => {
        setRoutes(modules)
      })
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Sider
          width={230}
          collapsible
        >
          <div className={styles.logo}>123</div>
          <Menu
            selectedKeys={[pathname]}
            mode="inline"
            theme="dark"
          >
            {routes.map((route) => (
              <Item key={route.path}>
                <NavLink to={route.path}>
                  {route.icon}
                  <span>{route.title}</span>
                </NavLink>
              </Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header />
          <Content className={styles.content}>
            <Suspense fallback="loading...">
              <Switch>
                {routes.map((route) => (
                  <Route
                    component={lazy(route.component)}
                    exact={route.exact}
                    path={route.path}
                    key={route.path}
                  />
                ))}
                <Route component={NoMatch} />
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default Root
