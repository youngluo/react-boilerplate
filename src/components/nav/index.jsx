import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'ui';
import React from 'react';
import navData from './router-nav';

const { Item } = Menu;

// 无状态函数组件，理想状态下，大多数组件都应该是无状态函数
const Nav = () => (
  <Menu style={{ height: '100%' }} mode="inline" theme="dark">
    {navData.map(item => (
      <Item key={item.name}>
        <NavLink to={item.name}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </NavLink>
      </Item>
    ))}
  </Menu>
);

export default Nav;
