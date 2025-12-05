import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  test('converts string numbers to numbers', () => {
    expect(toNumber('42')).toBe(42);
  });
  test('non-numeric returns NaN', () => {
    const r = toNumber('abc');
    expect(Number.isNaN(r)).toBe(true);
  });
});
