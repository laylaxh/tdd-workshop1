import { expect } from 'chai';

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return the index of the value', function() {
      expect([1,2,3].indexOf(3)).to.eql(2);
    });
  });
});
