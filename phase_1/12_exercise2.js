// Given the following array of User instances (the class from the previous exercise)
// We'd now like to have a class UserBase that behaves like this:
// > const userBase = new UserBase(users);
// > userBase.count();
// 3
// > userBase.getNames();
// [ 'Uma', 'Josh', 'Ollie' ]
// > userBase.getIntroductions();
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]

// To complete this exercise, you will have to:
// declare a new class and its methods.
// use what you've previous learned on working with arrays, like the map method.
// call methods from the User class.

// Implement the UserBase class in a file userBase.js so it behaves exactly like in the example code above.
// Require the two classes into the node REPL to verify it's working.

const User = require('./12_exercise1');

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map(getJustNames);
  }

  getIntroductions() {
    return this.users.map(getJustIntroductions);
  }
}

function getJustNames(user) {
  return user.getName();
}

function getJustIntroductions(user) {
  return user.getIntroduction();
}

const userBase = new UserBase(users);
console.log(userBase.count());
console.log(userBase.getNames());
console.log(userBase.getIntroductions());

module.exports = UserBase;
