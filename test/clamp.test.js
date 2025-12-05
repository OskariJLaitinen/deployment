const clamp = require('../src/clamp.js');


describe('clamp', () => {
  test('clamps values within bounds', () => {
    expect(clamp(10, 0, 5)).toBe(5);
    expect(clamp(-3, 0, 5)).toBe(0);
    expect(clamp(3, 0, 5)).toBe(3);
  });
});
