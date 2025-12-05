const map = require('../src/map.js');
const reduce = require('../src/reduce.js');


describe('collections', () => {
  test('map maps over arrays', () => {
    expect(map([1,2,3], x => x * 2)).toEqual([2,4,6]);
  });

  test('reduce reduces arrays', () => {
    expect(reduce([1,2,3], (a,b)=>a+b, 0)).toBe(6);
  });
});
