// 11_array_operations

// Learn to filter and map arrays:
// - <filter> to create a new array by applying a predicate function on existing array's elements.
// - <map> to create a new array by applying a specific operation to the existing array's elements.


// using <filter>
const students = ['Stevie', 'Laura', 'Luke', 'Alex', 'George', 'Oh']

function isShorterThanThree(student) {
  if (student.length < 3) {
    return true;
  } else {
    return false;
  }
}
const studentsShorterThreeLetters = students.filter(isShorterThanThree);
console.log(studentsShorterThreeLetters); // ['Oh']


// using <map>
const moreStudents = ['Stevie', 'Laura', 'Luke', 'Alex', 'George', 'Oh']
function getUpperCased(student) {
  return student.toUpperCase();
}
const uppercaseStudents = moreStudents.map(getUpperCased);
console.log(uppercaseStudents); // ['STEVIE', 'LAURA', 'LUKE', 'ALEX', 'GEORGE', 'OH']
