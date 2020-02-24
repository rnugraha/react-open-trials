const resolvers = {
  Query: {
    gene: (_source, {id}, {dataSources}) => {
      return dataSources.geneAPI.getGeneProfile(id)
    }
  },
};

module.exports = {
  resolvers,
};
