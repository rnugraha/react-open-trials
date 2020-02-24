const { server } = require('./apolloServer');

describe('ApolloServer', () => {
  it('should create new apollo server instance', () => {
    expect(server).toBeDefined()
    expect(server).toHaveProperty('listen')
  })
});