import { FC, Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { loadModules, IRouter } from '@/config/routes'
import Header from '@/containers/Header'
import Menu from '@/containers/Menu'
import NoMatch from '@/pages/404'
import styles from './index.scss'

const { Content, Sider } = Layout

const Root: FC = () => {
  const [routes, setRoutes] = useState<IRouter[]>([])

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
          <Menu routes={routes} />
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
