import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import routes from 'config/router.config.jsx';
import React, { Component } from 'react';
import { Layout, Icon } from 'ui';
import Menu from '../Menu';
import './index.scss';

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
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">{__APP_NAME__}</div>
            <Menu />
          </Sider>
          <Layout className="root-container">
            <Header>
              <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={() => this.toggle()} />
            </Header>
            <Content style={{ padding: 30, backgroundColor: '#f0f0f0' }}>
              {routes.map(route => (
                <Route
                  key={route.name}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
              <Redirect to="/dashboard" />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
