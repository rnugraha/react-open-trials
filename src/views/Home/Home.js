import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Paper,
  InputBase,
  Button,
  AppBar,
  Toolbar,
  Link,
  List,
  ListItem,
  IconButton,
  withStyles
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Home.styles';
import PropTypes from 'prop-types';

const ListItemLink = props => {
  return <ListItem component={Link} {...props} dense />;
};

export const Home = props => {
  const { classes } = props;

  const inputRef = React.createRef();

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <React.Fragment>
      {/* MAIN APP BAR */}

      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Typography variant='h6' color='inherit' className={classes.grow}>
            &nbsp;
          </Typography>
          <Button color='inherit' href='/about'>
            About
          </Button>
        </Toolbar>
        <Grid container spacing={2} className={classes.menuRoot}>
          <Grid item xs={12} className={classes.main}>
            <Typography
              variant={'h2'}
              color='secondary'
              className={classes.title}
            >
              React-Apollo Open Trials
            </Typography>
          </Grid>
          <Grid item md={3} xs={1} />
          <Grid item md={6} xs={10}>
            <Paper className={classes.searchPaper} elevation={1}>
              <InputBase
                id='search-input'
                className={classes.input}
                placeholder='Enter search keywords'
                inputRef={inputRef}
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                disabled
              />
              <IconButton
                id='search-icon'
                className={classes.iconButton}
                aria-label='Search'
                type={'submit'}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
            <Typography variant={'body1'}>
              Example: <a href='/geneView/ENSG00000141510'>TP53</a> (this example link will fetch gene information from Apollo GraphQL client)
            </Typography>
          </Grid>
          <Grid item md={3} xs={1} />
        </Grid>
      </AppBar>

      {/* FOOTER */}

      <Grid container spacing={2} className={classes.footer}>
        <Grid item xs={12} md={2}>
          &nbsp;
        </Grid>
        <Grid item xs={12} md={2} className={classes.footerBlock}>
          <Typography variant='subtitle1' className={classes.footerItemTitle}>
            Platform
          </Typography>
          <List>
            <ListItemLink className={classes.footerItem}>
              Version 0.0.1
            </ListItemLink>
          </List>
        </Grid>
        <Grid item xs={12} md={2} className={classes.footerBlock}>
          <Typography variant='subtitle1' className={classes.footerItemTitle}>
            Help
          </Typography>
          <List>
            <ListItemLink className={classes.footerItem}>FAQ</ListItemLink>
          </List>
        </Grid>
        <Grid item xs={12} md={2} className={classes.footerBlock}>
          <Typography variant='subtitle1' className={classes.footerItemTitle}>
            Links
          </Typography>
          <List>
            <ListItemLink className={classes.footerItem}>
              Open Trials
            </ListItemLink>
            <ListItemLink className={classes.footerItem}>
              React
            </ListItemLink>
            <ListItemLink className={classes.footerItem}>
              Apollo GraphQL
            </ListItemLink>
          </List>
        </Grid>
        <Grid item xs={12} md={2} className={classes.footerBlock}>
          <Typography variant='subtitle1' className={classes.footerItemTitle}>
            Support
          </Typography>
          <List>
            <ListItemLink className={classes.footerItem}>
              rnugraha@gmail.com
            </ListItemLink>
            <ListItemLink className={classes.footerItem}>
              (000) 888 888 888
            </ListItemLink>
          </List>
        </Grid>
        <Grid item xs={12}>
          &nbsp;
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Home.propTypes = {
  classes: PropTypes.any
};

export default withStyles(styles)(Home);
