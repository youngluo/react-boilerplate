import React, { Component } from 'react';
import Nav from '../nav';
import { Layout } from 'antd';
import Loading from '../../containers/loading';

const { Header, Content } = Layout;

class Root extends Component {
    constructor(props) {
        super(props);
        this.pathName = this.props.location.pathname.split('/').pop();
    }

    render() {
        return (
            <Layout>
                <Header> </Header>
                <Layout className='ant-layout-has-sider'>
                    <Nav pathName={this.pathName}></Nav>
                    <Content style={{ padding: 30, backgroundColor: '#fff' }}>
                        {this.props.children}
                        <Loading />
                    </Content>
                </Layout>
            </Layout >
        )
    }
}

export default Root;