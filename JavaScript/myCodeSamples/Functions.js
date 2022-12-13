// Get a random indexed item from an array. Takes an array as a parameter. Multiplies the length of the array by the random function to give a random number. The number is then rounded down to remove the decimal places.
function getRandomItemIndex(arrayName) {
  return Math.floor(Math.random() * arrayName.length);
}

const testArr = [4, 3, 'Bird', 'House', 'school', true, 'yellow'];

// Prints out the index number
console.log(getRandomItemIndex(testArr);

// To grab a random index from the array and print it out
console.log(testArr[getRandomItemIndex(testArr)]);
