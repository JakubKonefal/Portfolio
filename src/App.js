import React from 'react';
import './App.scss';
import Portfolio from './PortfolioPL/Portfolio';
import { Route, Switch } from 'react-router-dom';

function App() {
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
