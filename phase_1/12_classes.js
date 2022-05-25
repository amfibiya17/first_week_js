// 12_classes

// Classes in JS work in a similar way to other languages, 
// they are declared with methods — and perhaps attributes — 
// and can be instantiated when creating instances.

// Here is how we can define a class:
class Rectangle {
  constructor(height, width) { // <- a constructor, to give initial arguments
    this.height = height;
    this.width = width; // <- defining attributes stored on the instance with `this`
  }

  getArea() { // <- a method
    return this.height * this.width;
  }
}
  
const rect = new Rectangle(5, 10); // <- creating a new instance of class
console.log(rect.getArea()); // <- 50

// in the file where is our class
module.exports = Rectangle; // <- classes can be exported and required the same way as functions

// in the file where we require this class
const Rectangle = require('./name_of_file');
