const chunk = require('../src/chunk.js');

describe('chunk', () => {
  test('splits array into chunks of given size', () => {
    expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
  });

  test('size larger than array returns whole array', () => {
    expect(chunk([1,2,3], 10)).toEqual([[1,2,3]]);
  });

  test('zero size returns empty array', () => {
    expect(chunk([], 0)).toEqual([]);
  });
});
