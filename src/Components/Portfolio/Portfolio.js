import React from 'react';
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Portfolio = ({ location: { pathname } }) => {
  const language = pathname === '/eng' ? 'eng' : 'pl';
  return (
    <div className="App">
      <NavbarTop language={language} />
      <SideDrawer language={language} />
      <Header language={language} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </div>
  );
};

export default Portfolio;
