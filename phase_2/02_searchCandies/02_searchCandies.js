// 02_search_function

const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

// To complete this question, you will some things you've learned previously:
// The filter and map methods.
// How to access an object property.

// You'll also need to find out how to verify whether a string is the prefix for another string.

// You'll test-drive a function searchCandies that takes the following two arguments: 
// a search string and a maximum price — and returns only the names of candies matching these criteria:

// the candy name starts by the search string
// the candy price is less than the maximum price

function searchCandies(searchString, maxPrice) {
  // searchArray = [];
  // candies.forEach((candy) => {
  //   if (maxPrice > candy.price && candy.name.startsWith(searchString) === true) {
  //     searchArray.push(candy.name);
  //   }
  // }); <- before refactoring, and map and filter

  return candies
    .filter(priceCheck)
    .filter(stringCheck)
    .map(getName);
  
  function priceCheck(candy) { // <- filter
    if (candy.price < maxPrice) {
      return true;
    } else {
      return false;
    }
  } // <- or can be just 'return candy.price < maxPrice' without if statement
  
  function stringCheck(candy) { // <- filter
    if (candy.name.startsWith(searchString)) {
      return true;
    } else {
      return false;
    }
  } // <- or can be just 'return candy.name.startsWith(searchString)' without if statement
  
  function getName(candy) { // <- map
    return candy.name;
  }
};

console.log(searchCandies('Ma', 10));
console.log(searchCandies('Ma', 2));
console.log(searchCandies('S', 10));
console.log(searchCandies('S', 4));
console.log(searchCandies('Maltesers', 10));

module.exports = searchCandies;
