const { add, multiply } = require('../lib/phase_2/01_testing');

describe('add', () => {
  it('adds 2 and 3', () => {
    const a = 2;
    const b = 3;
    expect(add(a, b)).toBe(5);
  });

  it('adds 0 and 7', () => {
    const a = 0;
    const b = 7;
    expect(add(a, b)).toBe(7);
  });
});

describe('multiply', () => {
  it('multiply 4 and 3', () => {
    const a = 4;
    const b = 3;
    expect(multiply(a, b)).toBe(12);
  });

  it('multiply 0 and 7', () => {
    const a = 0;
    const b = 7;
    expect(multiply(a, b)).toBe(0);
  });
});
