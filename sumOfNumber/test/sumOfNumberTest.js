var assert = require('chai').assert;
const  findSum =require('../sumOfNumber')

describe('Sum Of Nth', function() {
  describe('#findSum', function() {
    it('should return 3 when of number is 2 ', function() {
      assert.equal(findSum(2), 3);
    });
    it('should return 0 when of number is 0 ', function() {
        assert.equal(findSum(0), 0);
      });
      it('should return 3 when of number is 2 ', function() {
        assert.equal(findSum(10), 55);
      });
  });
});