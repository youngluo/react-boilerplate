import React from 'react';
import { Link } from 'react-router';
import navData from './router-nav';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

//无状态函数组件，理想状态下，大多数组件都应该是无状态函数
const Nav = ({ pathName }) => {
    return (
        <Sider width={200} style={{ backgroundColor: '#fff' }}>
            <Menu style={{ height: '100%' }} mode={'inline'} defaultSelectedKeys={[pathName]}>
                {navData.map(function (item) {
                    return (
                        <Menu.Item key={item.name}>
                            <Link to={item.name}>
                                <Icon type={item.icon}></Icon>
                                <span>{item.title}</span>
                            </Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        </Sider>
    )
}

export default Nav;