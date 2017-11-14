import { Layout, Menu, Icon } from 'ui';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import navData from './router-nav';

const { Sider } = Layout;

// 无状态函数组件，理想状态下，大多数组件都应该是无状态函数
const Nav = ({ pathName }) => (
  <Sider width={200} style={{ backgroundColor: '#fff' }}>
    <Menu style={{ height: '100%' }} mode="inline" defaultSelectedKeys={[pathName]}>
      {navData.map(item => (
        <Menu.Item key={item.name}>
          <NavLink to={item.name}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  </Sider>
);

Nav.propTypes = {
  pathName: PropTypes.string.isRequired
};

export default Nav;
