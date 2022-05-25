// We would like to implement a class to represent a user account.

// To complete this exercise, you will have to:
// Learn how to declare a class and its methods.
// Having a look at the Classes MDN documentation is a good start.
// Initialise an attribute within the constructor special method

// Implement the User class in a file user.js 
// so it behaves exactly like in the example code above.

// Require the file into the node REPL to verify the class is working.

class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

module.exports = User;
