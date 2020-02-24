import React from 'react';
import { Grid, Chip, withStyles } from '@material-ui/core';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto'
  },
  chip: {
    margin: theme.spacing(1)
  }
});

// Query to get gene profile
export const GET_GENE_PROFILE = gql`
  query Gene($ensemblId: String!) {
    gene(id: $ensemblId) {
      name
      description
      synonyms
    }
  }
`;

const geneView = props => {
  const { classes, match } = props;
  const ensemblId = match.params.ensemblGeneId;
  const geneSynonyms = synonymsList => {
    if (synonymsList.length > 0) {
      return synonymsList.map(each => (
        <Chip label={each} className={classes.chip} key={each} />
      ));
    } else {
      return 'N/A';
    }
  };
  return (
    <Grid container spacing={2} className={classes.paper}>
      <Grid item xs={12}>
        {/* Example of querying Apollo server  */}
        <Query variables={{ ensemblId }} query={GET_GENE_PROFILE}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error when querying gene profile.</p>;
            return (
              <React.Fragment>
                <h1>{data.gene.name}</h1>
                <h2>{match.params.ensemblGeneId}</h2>
                <p>{data.gene.description}</p>
                <div>Synonyms: {geneSynonyms(data.gene.synonyms)}</div>
              </React.Fragment>
            );
          }}
        </Query>
      </Grid>
    </Grid>
  );
};

geneView.propTypes = {
  classes: PropTypes.any,
  match: PropTypes.any
};

export default withStyles(styles)(geneView);
