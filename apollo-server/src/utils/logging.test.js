const BasicLogging = require('./logging')

describe('BasicLogging', () => {
  let logging;

  global.console = { 
    info: jest.fn(),
    log: jest.fn() 
  }

  beforeAll(() => {
    logging = new BasicLogging();
    jest.spyOn(global.console, 'info')
    jest.spyOn(global.console, 'log')
  });

  it('should create new apollo server instance', () => {
    expect(logging).toHaveProperty('requestDidStart')
    expect(logging).toHaveProperty('willSendResponse')
  })

  it('should create new apollo server instance', () => {
    logging.requestDidStart({
      queryString: 'foo',
      parsedQuery: 'bar',
      variables: 'variable'
    })
    expect(logging).toHaveProperty('requestDidStart')
    expect(logging).toHaveProperty('willSendResponse')
  })

});