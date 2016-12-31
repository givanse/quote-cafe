import math from '../math';

describe('#getRandom', function() {

  test('returns an integer', function() {
    const result = math.getRandom(1, 2); // possible 1
    expect(result).toEqual(1);
  });

});


describe('#getRandomId', function() {

  test('returns an integer', function() {
    const result = math.getRandomId(1, 2); // possible 0, 1
    expect(result).toEqual(0);
  });

});
