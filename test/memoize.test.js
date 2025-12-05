const memoize = require('../src/memoize.js');

describe('memoize', () => {
  test('returns cached result and only calls underlying function once for same args', () => {
    const mockFn = jest.fn(x => x * 2);
    const memo = memoize(mockFn);
    expect(memo(2)).toBe(4);
    expect(memo(2)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('supports custom resolver', () => {
    const mockFn = jest.fn((a,b) => a + b);
    const resolver = (a,b) => `${a}|${b}`;
    const memo = memoize(mockFn, resolver);
    expect(memo(1,2)).toBe(3);
    expect(memo(1,2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
