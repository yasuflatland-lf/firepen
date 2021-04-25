import React from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
// import ConfigDetail from './component/ConfigDetail';
import Head from './component/Head';
import Loader from './component/Loader';

import './App.global.css';

const LazyHome = React.lazy(() =>
  import(/* webpackChunkName: "HomePage" */ './component/Home')
);

const LazyConfig = React.lazy(() =>
  import(/* webpackChunkName: "HomePage" */ './component/Config')
);

export const HomePage = () => (
  <React.Suspense fallback={<Loader />}>
    <LazyHome />
  </React.Suspense>
);

export const ConfigPage = () => (
  <React.Suspense fallback={<Loader />}>
    <LazyConfig />
  </React.Suspense>
);

export default function App() {
  return (
    <Router>
      <>
        <Head />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/config" component={ConfigPage} />
        </Switch>
      </>
    </Router>
  );
}
