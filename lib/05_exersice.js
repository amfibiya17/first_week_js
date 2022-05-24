// A colleague just asked you some help to debug their code.
// When calling this function, something doesn't work as expected. 
// What fix can you suggest to solve the problem?

const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidLength('0795768594'));
console.log(isValidLength('0'));
