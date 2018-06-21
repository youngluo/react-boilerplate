import { NavLink, withRouter } from 'react-router-dom';
import navData from 'config/router-nav';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'UI';
import React from 'react';

const { Item } = Menu;

function MenuNav({ location }) {
  const { pathname } = location;

  return (
    <Menu
      selectedKeys={[pathname]}
      mode="inline"
      theme="dark"
    >
      {navData.map(item => (
        <Item key={item.path}>
          <NavLink to={item.path}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </NavLink>
        </Item>
      ))}
    </Menu>
  );
}

MenuNav.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(MenuNav);