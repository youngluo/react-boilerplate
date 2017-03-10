import React, { Component } from 'react';
import navData from './navData.js';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class Nav extends Component {
    render() {
        return (
            <Sider>
                <Menu>
                    {navData.map(function (item) {
                        return (
                            <Menu.Item key={item.name}>
                                <span>
                                    <Icon type={item.icon}></Icon>
                                    <span>{item.title}</span>
                                </span>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
        )
    }
}

export default Nav;