import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import routes from 'config/router.config';
import React, { Component } from 'react';
import { Layout, Icon } from 'ui';
import Menu from '../Menu';
import './index.less';

const { Header, Content, Sider } = Layout;

export default class Root extends Component {
  state = {
    collapsed: false
  };

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { collapsed } = this.state;

    return (
      <Router>
        <Layout>
          <Sider
            collapsed={collapsed}
            trigger={null}
            collapsible
          >
            <div className="logo">{__APP_NAME__}</div>
            <Menu />
          </Sider>
          <Layout className="root-container">
            <Header>
              <Icon
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => this.toggle()}
              />
            </Header>
            <Content style={{ padding: 30, backgroundColor: '#f0f0f0' }}>
              <Switch>
                {routes.map(route => (
                  <Route
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                    key={route.name}
                  />
                ))}
                <Redirect to="/dashboard" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
