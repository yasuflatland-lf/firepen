import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Config from './component/Config';
import ConfigDetail from './component/ConfigDetail';

import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/test" component={Config} />
        <Route path="/config" component={ConfigDetail} />
      </Switch>
    </Router>
  );
}
