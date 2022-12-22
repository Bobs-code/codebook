// Get a random indexed item from an array. Takes an array as a parameter. Multiplies the length of the array by the random function to give a random number. The number is then rounded down to remove the decimal places.
function getRandomItemIndex(arrayName) {
  return Math.floor(Math.random() * arrayName.length);
}

const testArr = [4, 3, 'Bird', 'House', 'school', true, 'yellow'];

// Prints out the index number
console.log(getRandomItemIndex(testArr);

// To grab a random index from the array and print it out
console.log(testArr[getRandomItemIndex(testArr)]);

/***************************************************** */

// Create an array of random numbers with a set lenght for the array and the max value for the numbers
let randomArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

//Returns the array of numbers as a string which can be sorted aftewars using the sort method as shown in the example below
console.log(
  `An arrayyyy: ` +
    randomArray(20, 30).sort((a, b) => {
      return b - a;
    })
);
