import React from 'react';
import Nav from '../nav';
import { Layout } from 'antd';

const { Header, Content } = Layout;

//无状态函数组件，理想状态下，大多数组件都应该是无状态函数
const Root = (props) => {
    return (
        <Layout>
            <Header> </Header>
            <Layout className='ant-layout-has-sider'>
                <Nav></Nav>
                <Content style={{ padding: 30, backgroundColor: '#fff' }}>
                    {props.children}
                </Content>
            </Layout>
        </Layout >
    )
}

export default Root;