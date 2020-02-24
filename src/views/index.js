import React from 'react';
import Home from './Home/Home';
import AppRoute from '../routes/AppRoute';
import Layout from './layout';
import About from './About/About';
import GeneView from './GeneView/GeneView';

const portalHome = () => {
  return (
    <React.Fragment>
      <AppRoute path='/' component={Home} exact layout={Layout} />
      <AppRoute path='/about' component={About} exact layout={Layout} />
      <AppRoute
        path={'/geneView/:ensemblGeneId'}
        component={GeneView}
        exact
        layout={Layout}
      />
    </React.Fragment>
  );
};

export default portalHome;
