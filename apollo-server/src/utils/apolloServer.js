const {ApolloServer, gql} = require('apollo-server');

const gene = require('../gene');
const trial = require('../trial')
const BasicLogging = require('../utils//logging')
const typeDef = gql`
  type Query
`;

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.

const server = new ApolloServer({
  typeDefs: [typeDef, gene.typeDef, trial.typeDef],
  resolvers: [gene.resolvers, trial.resolvers],
  dataSources: () => ({
    geneAPI: new gene.api(),
    trialAPI: new trial.api(),
  }),
  extensions: []
});

module.exports = {
  server
};