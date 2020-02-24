const resolvers = {
  Query: {
    findTrials: (_source, args, { dataSources }) => {
      return dataSources.trialAPI.getTrials(args.keywords, args.page, args.perPage);
    }
  },
};

module.exports = {
  resolvers,
};
