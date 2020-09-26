import React from 'react';
import './NavbarItem.scss';

const NavbarItem = ({ children, onClick }) => (
  <span className="Item" onClick={() => onClick()}>
    {children}
  </span>
);

export default NavbarItem;
