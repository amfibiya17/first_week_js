const ShoppingBasket = require('./03_shoppingBasket');

describe('ShoppingBasket', () => {
  
  let doubleAero = { getName: () => 'Aero', getPrice: () => 1.99 };

  describe('getTotalPrice', () => {
    it('returns 0 when there is nothing in products basket', () => {
      let basket = new ShoppingBasket();

      expect(basket.getTotalPrice()).toBe(0)
    });

    it('returns the total price of the products basket', () => {
      let basket = new ShoppingBasket();
      basket.addItem(doubleAero);

      expect(basket.getTotalPrice()).toBe(1.99);
    });
  });

  describe('addItem', () => {
    it('can add a chosen item into the products basket', () => {
      let basket = new ShoppingBasket();
      basket.addItem(doubleAero);
      
      expect(basket.products[0]).toBe(doubleAero)
    });
  });

  describe('applyDiscount', () => {
    it('can deduce the products basket price when discount applied', () => {
      let basket = new ShoppingBasket();
      basket.addItem(doubleAero);
      basket.applyDiscount(1);

      expect(basket.getTotalPrice()).toBe(0.99)
    });
  });

});
