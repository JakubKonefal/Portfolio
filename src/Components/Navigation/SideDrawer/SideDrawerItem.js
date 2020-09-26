import React from 'react';
import './SideDrawerItem.scss';

const SideDrawerItem = ({ children, onClick }) => {
  return (
    <span className="SideDrawerItem" onClick={onClick}>
      {children}
    </span>
  );
};

export default SideDrawerItem;
