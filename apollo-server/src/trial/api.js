const { RESTDataSource } = require('apollo-datasource-rest');

const trialsReducer = (result) => {
  return {
    totalCount: result.total_count,
    items: result.items.map(item => {
      return {
        id: item.id,
        publicTitle: item.public_title,
        briefSummary: item.brief_summary,
        gender: item.gender,
        status: item.status
      }
    })
  }
};

class TrialAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opentrials.net/v1/';
  }

  async getTrials(keywords, page, perPage) {
    const strQuery = `q=public_title%3A(${keywords})`;
    const response = await this.get(`search?${strQuery}&page=${page}&per_page=${perPage}`);
    return response ? trialsReducer(response) : null;
  }
}

module.exports = {
  api: TrialAPI
};
