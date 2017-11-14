import React, { Component } from 'react';
import Loading from 'containers/loading';
import { Layout } from 'ui';
import routes from '../../config/router.config';
import Nav from '../Nav';

const { Header, Content } = Layout;

class Root extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout className="ant-layout-has-sider">
          <Nav pathName={this.pathName} />
          <Content style={{ padding: 30, backgroundColor: '#fff' }}>
            {this.props.children}
            <Loading />
          </Content>
        </Layout>
      </Layout >
    );
  }
}

export default Root;
