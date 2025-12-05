import slice from '../src/slice.js';

describe('slice', () => {
  test('slices arrays', () => {
    expect(slice([1,2,3,4], 1, 3)).toEqual([2,3]);
  });

  test('slices strings', () => {
    expect(slice('abcd', 1, 3)).toEqual('bc');
  });
});
