import history from './history';

describe('routes', () => {
  it('should create browser history instance', () => {
    expect(history.length).toBe(1);
    expect(history.hasOwnProperty('go')).toBeTruthy();
    expect(history.hasOwnProperty('goBack')).toBeTruthy();
    expect(history.hasOwnProperty('goForward')).toBeTruthy();
  });
});
