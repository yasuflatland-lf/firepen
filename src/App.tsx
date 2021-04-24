import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const Hello = () => {
  return (
    <div className="bg-white">
      <h2 className="bg-white">TEST</h2>
    </div>

  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
