const Candy = require('./03_candy');

describe('Candy', () => {

  let candy = new Candy('Aero', 1.99)

  describe('getName', () => {
    it('returns the name of the candy', () => {
      expect(candy.getName()).toBe('Aero')
    });
  });

  describe('getPrice', () => {
    it('returns the price of the candy', () => {
      expect(candy.getPrice()).toBe(1.99)
    });
  });

});
