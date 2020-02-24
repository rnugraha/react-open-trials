const { RESTDataSource } = require('apollo-datasource-rest');

const geneReducer = (geneProfile) => {
  return {
    name: geneProfile.approved_symbol,
    description: geneProfile.uniprot_function[0] || '',
    synonyms: geneProfile.symbol_synonyms.concat(geneProfile.name_synonyms)
  }
};

class GeneAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opentargets.io/v3/';
  }

  async getGeneProfile(ensemblId) {
    const response = await this.get(`platform/private/target/${ensemblId}`);
    return response ? geneReducer(response) : null;
  }
}

module.exports = {
  api: GeneAPI
};
