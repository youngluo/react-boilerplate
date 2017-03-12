import React, { Component } from 'react';
import Nav from '../nav';
import { Layout } from 'antd';

const { Header, Content } = Layout;

class Root extends Component {
    render() {
        return (
            <Layout>
                <Header> </Header>
                <Layout className='ant-layout-has-sider'>
                    <Nav></Nav>
                    <Content style={{ padding: 30, backgroundColor: '#fff' }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout >
        );
    }
}

export default Root;