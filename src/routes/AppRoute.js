import React from 'react';
import {Route} from "react-router-dom";
import PropTypes from 'prop-types';

const appRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
);

appRoute.propTypes = {
  component: PropTypes.object,
  layout: PropTypes.func || undefined,
}

export default appRoute;
