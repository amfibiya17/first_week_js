const fizzBuzz = require('../lib/phase_2/01_fizzbuzz.js');

describe('fizzBuzz', () => {
  it('returns Fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });

  it('returns Buzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  });

  it('returns FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });

  it('returns number', () => {
    expect(fizzBuzz(31)).toBe(31)
  });
});
