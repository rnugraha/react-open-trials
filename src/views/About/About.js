import React from 'react'
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Query} from "react-apollo";
import {gql} from "apollo-boost";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
});

// Query to get data from cache
export const GET_JAJAL = gql`
  {
    jajal @client
  }
`;

const about = props => {
  const {classes} = props;
  return(
    <Grid container spacing={2} className={classes.paper}>
      <Grid item xs={12}>
        <h1>ABOUT</h1>
      </Grid>
      <Grid item xs={12}>
        <p>This application is a prototype of React and Apollo GraphQL using Open Trials data.</p>
        {/* Example of querying local state  */}
        <Query query={GET_JAJAL}>
          {({data}) => (
            <p>{'Cache: ' + data.jajal}</p>
          )}
        </Query>        
      </Grid>
    </Grid>
  )
};
about.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(about);
