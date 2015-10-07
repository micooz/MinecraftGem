import assert from 'assert';
import should from 'should';

module.exports = function runTests(testCases) {
  if (testCases instanceof Array) {
    for (let i = 0, len = testCases.length; i < len; ++i) {
      const test = testCases[i];
      const methods = test.methods;
      describe(test.title, () => {
        for (let k = 0, len = methods.length; k < len; ++k) {
          const method = methods[k];
          describe(method.title, () => {
            if (method.hasOwnProperty('actual') && method.hasOwnProperty('real')) {
              const ac = method.actual;
              const actual = (typeof ac == 'function') ? ac() : ac;
              it(`should return ${actual}`, () => {
                assert.equal(method.real(), actual);
              })
            } else if (method.hasOwnProperty('err')) {
              it('should throw an error', () => {
                method.err.should.throw();
              });
            } else {
              throw new Error('unresolved form of test method');
            }
          });
        } // for
      });
    }
  } else {
    throw new TypeError('test cases must be an array');
  }
};
