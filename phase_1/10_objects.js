// 10_objects

// In JavaScript, "object" usually refers to a type of key-value structure, 
// similar to a Ruby hash. Here's an example of a JavaScript object:
const person = {
  name: 'Slava',
  age: 35,
  address: 'Paradise Street, 1'
};

// Both ways can be used to access an object's property:
console.log(person.name);
console.log(person['age']);

// There are two ways of declaring objects in JavaScript

// first
const anotherPerson = {
  name: 'Slava',
  age: 35,
  address: 'Paradise Street, 1'
};

// second
const newPerson = {
  name: 'Slava',
  age: 35,
  address: 'Paradise Street, 1',

  getPhone: () => {
    return 12345678;
  }
}
console.log(newPerson.getPhone());
