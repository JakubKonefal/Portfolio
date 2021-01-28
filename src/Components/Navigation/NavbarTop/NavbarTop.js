import React from 'react';
import './NavbarTop.scss';
import NavbarItem from './NavbarItem';
import { Tooltip } from '@material-ui/core';
import PLflag from '../../../assets/img/pl-flag.png';
import UKflag from '../../../assets/img/uk-flag.png';
import { Link } from 'react-router-dom';
import cv from '../../../assets/cv/CV.pdf';
import cvEnglish from '../../../assets/cv/CV-English.pdf';

const NavbarTop = ({ language }) => {
  const scrollToAbout = () => {
    document.querySelector('.About__ScrollAnchor').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToSkills = () => {
    document.querySelector('.Skills__ScrollAnchor').scrollIntoView({
      behavior: 'smooth',
    });
  };
  const scrollToProjects = () => {
    document.querySelector('.Projects').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className="Navbar">
      <Tooltip title="Download" placement="top">
        <a
          className="Navbar__CV"
          href={language === 'eng' ? cvEnglish : cv}
          download="CV_Jakub_Konefal_Junior_Frontend_Developer"
        >
          CV
        </a>
      </Tooltip>
      <NavbarItem onClick={scrollToAbout}>
        {language === 'eng' ? 'About' : 'O mnie'}
      </NavbarItem>
      <NavbarItem onClick={scrollToSkills}>
        {language === 'eng' ? 'Skills' : 'Umiejętności'}
      </NavbarItem>
      <NavbarItem onClick={scrollToProjects}>
        {language === 'eng' ? 'Projects' : 'Projekty'}
      </NavbarItem>
      <div className="Navbar__Flags">
        <Link to="/">
          <img className="Navbar__Flag" src={PLflag} alt="PL" />
        </Link>
        <Link to="/eng">
          <img className="Navbar__Flag" src={UKflag} alt="ENG" />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarTop;
