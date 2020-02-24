const { print } = require('graphql');

/**
 * Example of basic logging class
 */
class BasicLogging {
  requestDidStart({queryString, parsedQuery, variables}) {
    const query = queryString || print(parsedQuery);
    console.info('\nQUERY: \n=======\n', query);
    console.info('\nVARIABLE: \n ==========\n', variables);
  }

  willSendResponse({graphqlResponse}) {
    console.log('\nGraphQL Response: \n ==========\n', JSON.stringify(graphqlResponse, null, 2));
  }
}

module.exports = BasicLogging;