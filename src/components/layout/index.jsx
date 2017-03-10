import React, { Component } from 'react';
import Nav from '../nav';
import { Layout } from 'antd';

const { Header, Content } = Layout;

class Root extends Component {
    render() {
        return (
            <Layout>
                <Header> </Header>
                <Layout>
                    <Nav></Nav>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Root;