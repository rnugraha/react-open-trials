const { resolvers } = require("./resolvers");

describe('resolvers', () => {
  it('should create resolvers for gene type defs', () => {
    expect(resolvers.Query).toHaveProperty('gene')
  })

  it('should create resolvers for gene type defs', () => {
    const mockDataSources = {
      dataSources: {
        geneAPI: {
          getGeneProfile: jest.fn() 
        }
      }
    }
    resolvers.Query.gene('source', {id: 'id'}, mockDataSources)
    expect(mockDataSources.dataSources.geneAPI.getGeneProfile).toHaveBeenCalledWith('id')
  })
})