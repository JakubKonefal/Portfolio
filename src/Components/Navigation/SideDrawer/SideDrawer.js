import React, { useState } from 'react';
import './SideDrawer.scss';
import { Tooltip } from '@material-ui/core';
import SideDrawerItem from './SideDrawerItem';
import { Close, Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PLflag from '../../../assets/img/pl-flag.png';
import UKflag from '../../../assets/img/uk-flag.png';
import StylesProvider from '@material-ui/styles/StylesProvider';

const SideDrawer = ({ language }) => {
  const [sideDrawerOpen, toggleSideDrawer] = useState(false);

  const scrollToAbout = () => {
    document.querySelector('.About__ScrollAnchor').scrollIntoView({
      behavior: 'smooth',
    });
    toggleSideDrawer(!sideDrawerOpen);
  };

  const scrollToSkills = () => {
    document.querySelector('.Skills__ScrollAnchor').scrollIntoView({
      behavior: 'smooth',
    });
    toggleSideDrawer(!sideDrawerOpen);
  };
  const scrollToProjects = () => {
    document.querySelector('.Projects__ScrollAnchor').scrollIntoView({
      behavior: 'smooth',
    });
    toggleSideDrawer(!sideDrawerOpen);
  };

  return (
    <nav className={sideDrawerOpen ? 'SideDrawer_Active' : 'SideDrawer'}>
      <StylesProvider injectFirst>
        <Close
          className="SideDrawer__CloseIcon"
          onClick={() => toggleSideDrawer(!sideDrawerOpen)}
        />
        <Menu
          className={sideDrawerOpen ? 'Hidden' : 'SideDrawer__MenuIcon'}
          onClick={() => toggleSideDrawer(!sideDrawerOpen)}
        />
      </StylesProvider>
      <SideDrawerItem onClick={scrollToAbout}>
        {language === 'pl' ? 'O mnie' : 'About'}
      </SideDrawerItem>
      <SideDrawerItem onClick={scrollToSkills}>
        {language === 'pl' ? 'Umiejętności' : 'Skills'}
      </SideDrawerItem>
      <SideDrawerItem onClick={scrollToProjects}>
        {language === 'pl' ? 'Projekty' : 'Projects'}
      </SideDrawerItem>
      <Tooltip title="Download" placement="top">
        <a
          className="SideDrawer__CV"
          href="https://srv-file21.gofile.io/downloadStore/srv-store2/2Cqspz/cv.pdf"
          download
        >
          CV
        </a>
      </Tooltip>
      <div className="SideDrawer__Flags">
        <Link to="/">
          <img className="SideDrawer__Flag" src={PLflag} alt="pl" />
        </Link>
        <Link to="/eng">
          <img className="SideDrawer__Flag" src={UKflag} alt="eng" />
        </Link>
      </div>
    </nav>
  );
};

export default SideDrawer;
