import React from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
// import ConfigDetail from './component/ConfigDetail';
import Head from './component/Head';
import Loader from './component/Loader';

import './App.global.css';

const LazyHome = React.lazy(() =>
  import(/* webpackChunkName: "Home" */ './component/Home')
);

const LazyConfig = React.lazy(() =>
  import(/* webpackChunkName: "Config" */ './component/Config')
);

const LazyConfigDetail = React.lazy(() =>
  import(/* webpackChunkName: "ConfigDetail" */ './component/ConfigDetail')
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

export const ConfigDeteilPage = () => (
  <React.Suspense fallback={<Loader />}>
    <LazyConfigDetail />
  </React.Suspense>
);

export default function App() {
  return (
    <Router>
      <Head />
      {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
      <Switch>
        <Route path="/config-detail" component={ConfigDeteilPage} />
        <Route path="/config" component={ConfigPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
