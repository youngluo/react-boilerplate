import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FC, Suspense, useState } from 'react';
import routes from '@config/router.config';
import Header from '@containers/Header';
import Menu from '@components/Menu';
import NoMatch from '@pages/404';
import { Layout } from 'antd';
import Loading from '@component/Loading';
import './index.scss';

const { Content, Sider } = Layout;
const Root: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Layout>
          <Sider
            onCollapse={() => setCollapsed(!collapsed)}
            collapsed={collapsed}
            collapsible
            width={230}
          >
            <div className="logo">123</div>
            <Menu />
          </Sider>
          <Layout className="root-container">
            <Header />
            <Content style={{ padding: 30, backgroundColor: '#f0f0f0', overflow: 'auto' }}>
              <Switch>
                {routes.map((route) => (
                  <Route
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                    key={route.name}
                  />
                ))}
                <Route component={NoMatch} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Suspense>
  );
};

export default Root;