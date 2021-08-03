
beforeEach(() => {
 // code here to init the enviroment. avoid duplocate code
});

afterEach(() => {
  // finalize the resorce here
});

// mock the enviroment:
// https://jestjs.io/docs/en/manual-mocks

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});
