const Candy = require('./03_candy');

class ShoppingBasket {
  constructor() {
    this.products = [];
    this.discount = 0;
  }

  getTotalPrice() {
    let sum = 0;
    this.products.forEach((candy) => {
      sum += candy.getPrice();
    });
    return sum - this.discount;
  }

  addItem(sweet) {
    this.products.push(sweet);
    return this.products;
  }

  applyDiscount(discount) {
    return this.discount = discount;
  }
}

const candy = new Candy('Mars', 4.99);

console.log(candy.getName()); // <- Mars
console.log(candy.getPrice()); // <- 4.99

const basket = new ShoppingBasket();

console.log(basket.getTotalPrice()); // <- 0
console.log(basket.addItem(candy)); // <- [Candy {name: 'Mars', price: 4.99}]
console.log(basket.getTotalPrice()); // <- 4.99

console.log(basket.addItem(new Candy('Skittle', 3.99)));
console.log(basket.addItem(new Candy('Skittle', 3.99)));

console.log(basket.applyDiscount(1)); // <- 1
console.log(basket.getTotalPrice()); // <- 11.97

module.exports = ShoppingBasket;
