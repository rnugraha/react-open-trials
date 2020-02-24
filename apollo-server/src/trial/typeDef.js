const { gql } = require("apollo-server");

const typeDef = gql`
  type TrialOverview {    
    id: String
    publicTitle: String
    briefSummary: String
    gender: String
    status: String
  }

  type TrialSearchResult {
    totalCount: Int
    items: [TrialOverview]
  }
  
  extend type Query {
    findTrials(keywords: String, page: Int, perPage: Int): TrialSearchResult
  }  
`;

module.exports = {
  typeDef
};
