import React from 'react';
import NavbarTop from '../Components/Navigation/NavbarTop/NavbarTop';
import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
import Header from '../Components/Header/Header';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';

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
