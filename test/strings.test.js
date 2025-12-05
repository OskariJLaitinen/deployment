import upperFirst from '../src/upperFirst.js';
import words from '../src/words.js';

describe('string utilities', () => {
  test('upperFirst capitalizes first letter', () => {
    expect(upperFirst('hello')).toBe('Hello');
    expect(upperFirst('Hello')).toBe('Hello');
  });

  test('words splits string into words', () => {
    expect(words('hello world')).toEqual(['hello','world']);
  });
});
