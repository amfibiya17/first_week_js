const searchCandies = require('./02_searchCandies');

// Use the toEqual() Jest matcher

describe('searchCandies', () => {
  it('returns Aero if max price is 2 and search name is Aero', () => {
    expect(searchCandies('Aero', 2)).toEqual(['Aero']);
  });
 
  it('returns Skitties if max price is 4 and search name is Skitties', () => {
    expect(searchCandies('Skitties', 4)).toEqual(['Skitties']);
  });

  it('returns Mars, Maltesers if max price is 10 and search name is Ma', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns Skitties, Skittles, Starburst if max price is 10 and search name is S', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it('returns Skitties, Skittles if max price is 4 and search name is S', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });
});