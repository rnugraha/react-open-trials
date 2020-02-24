const { gql } = require("apollo-server");

const typeDef = gql`
  type Gene {    
    name: String
    description: String
    synonyms: [String]
  }
  
  extend type Query {
    gene(id: String): Gene
  }  
`;

module.exports = {
  typeDef
};
