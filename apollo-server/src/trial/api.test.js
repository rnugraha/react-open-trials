const {api} = require('./api');

describe('GeneAPI', () => {
  let GeneAPI;
  beforeAll(() => {
    GeneAPI = new api()
  });
  it('should have baseURL', () => {
    expect(GeneAPI.baseURL).toBe('https://api.opentargets.io/v3/');
  });

  it('should return gene object or null when response is undefined', async () => {
    const spy = jest.spyOn(GeneAPI, 'get')
      .mockImplementationOnce(() => undefined)
      .mockImplementationOnce(() => ({
        approved_symbol: 'TP53',
        uniprot_function: ['foo bar'],
        symbol_synonyms: ['TP53'],
        name_synonyms: ['name of TP53']
      }));
    
    const res1 = await GeneAPI.getGeneProfile();
    expect(spy).toHaveBeenCalled();
    expect(res1).toBeNull();

    const res2 = await GeneAPI.getGeneProfile();
    expect(spy).toHaveBeenCalled();
    expect(res2).toEqual({
      name: 'TP53',
      description: 'foo bar',
      synonyms: ['TP53', 'name of TP53']
    });
  });

});