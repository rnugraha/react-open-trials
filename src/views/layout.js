import React from 'react';
import theme from "./layout.theme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import PortalTopBar from '../components/PortalTopBar/PortalTopBar';
import PropTypes from 'prop-types';

const renderTopBar = ({match}) => {
  return (match || {}).path !== '/' && (
    <PortalTopBar/>
  )
};

export const Layout = props => (
  <MuiThemeProvider theme={theme}>
    {renderTopBar(props.children.props)}
    {props.children}
  </MuiThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
