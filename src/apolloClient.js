import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000'
});

// Init cache
cache.writeData({
  data: {
    jajal: 'This is value that was stored in the cache during initiation.'
  }
});

export default client;
