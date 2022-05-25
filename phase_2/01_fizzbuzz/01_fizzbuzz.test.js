const fizzBuzz = require('./01_fizzbuzz');

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
