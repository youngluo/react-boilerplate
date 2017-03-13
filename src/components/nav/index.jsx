import React from 'react';
import { Link } from 'react-router';
import navData from './navData.js';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

const Nav = (props) => {
    return (
        <Sider width={200} style={{ backgroundColor: '#fff' }}>
            <Menu style={{ height: '100%' }} mode={'inline'} defaultSelectedKeys={['dashboard']}>
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