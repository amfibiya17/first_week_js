// 03_shopping_basket

class ShoppingBasket {
  constructor() {
    this.products = [];
    this.discount = 0;
  }

  getTotalPrice() {
    let sum = 0;
    this.products.forEach((candy) => {
      sum += candy.getPrice;
    });
    return sum - this.discount;
  }

  addItem(sweet) {
    this.products.push(sweet);
    // return this.products;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }
}

// const basket = new ShoppingBasket();

// console.log(basket.getTotalPrice());
// console.log(basket.addItem('Aero', 1.99));
// console.log(basket.applyDiscount(1));
// console.log(basket.getTotalPrice());

module.exports = ShoppingBasket;
