import React from 'react';
import './App.scss';
import Portfolio from './Components/Portfolio/Portfolio';
import { Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    easing: 'linear',
    offset: 50,
    delay: 50,
  });

  return (
    <>
      <Switch>
        <Route path="/" render={(props) => <Portfolio {...props} />} />
        <Route path="/eng" render={(props) => <Portfolio {...props} />} />
      </Switch>
    </>
  );
}

export default App;
