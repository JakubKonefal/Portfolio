import React from 'react';
import './App.scss';
import NavbarTop from './Components/Navigation/NavbarTop/NavbarTop';
import SideDrawer from './Components/Navigation/SideDrawer/SideDrawer';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Portfolio from './PortfolioPL/Portfolio';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <NavbarTop />
      <SideDrawer />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
      <Switch>
        <Route path="/" render={(props) => <Portfolio {...props} />} />
        <Route path="/eng" render={(props) => <Portfolio {...props} />} />
      </Switch>
    </>
  );
}

export default App;
