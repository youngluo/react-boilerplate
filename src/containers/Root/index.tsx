import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { FC, Suspense, lazy } from 'react'
import { Layout, Spin } from 'antd'
import Header from '@/containers/Header'
import routes from '@/config/routes'
import Menu from '@/containers/Menu'
import NoMatch from '@/pages/404'
import styles from './index.scss'

const { Content, Sider } = Layout

const Root: FC = () => (
  <Suspense fallback={<Spin />}>
    <BrowserRouter>
      <Layout>
        <Sider
          collapsible
          width={230}
        >
          <div className={styles.logo}>123</div>
          <Menu />
        </Sider>
        <Layout>
          <Header />
          <Content style={{ padding: 30, backgroundColor: '#f0f0f0', overflow: 'auto' }}>
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
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  </Suspense>
)

export default Root
