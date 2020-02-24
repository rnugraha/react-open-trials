import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  titleLink: {
    textShadow: '0px 1px 1px #222222',
    textDecoration: 'none',
  },
  cgrLogo: {
    marginRight: 7,
    width: 35,
    height: 35
  },
};

export const portalTopBar = props => {
  const { classes } = props;
  return(
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography variant='h5' color='inherit'>
            <Link component={RouterLink} to='/' color='secondary'className={classes.titleLink}>
              React-Apollo Open Trials
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
};

portalTopBar.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(portalTopBar);
