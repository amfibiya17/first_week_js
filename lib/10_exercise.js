// Print the value of the city attribute ('London').
// Print the value of the second hobbies value ('tennis').

const person = {
  name: 'Slava',
  age: 35,
  address: {
    city: 'Paradise',
    postcode: 'E1 123'
  },
  hobbies: ['reading', 'walking', 'cooking']
};

console.log(person.address.city);
console.log(person.hobbies[1]);
