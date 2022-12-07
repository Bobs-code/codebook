/** Methods Covered
 * ADD AND REMOVE
 * arr.splice()
 * arr.slice()
 * arr.concat()
 *
 * ITERATE
 *arr.forEach
 *
 */

let books = [
  'Computer: History of Information Machine',
  'Code: Hidden Language of Computers',
  'TDD: The basics of Test Driven Development',
  'Eloquent JavaScript',
];

let deskItems = ['Duck', 'Wallet', 'Book', 'Coin'];

console.log('SPLICE METHOD');
/** Splice arr.splice(start[, deleteCount, elem1, ... elemN])
console.log(books);  */

// Removes 3 elements starting with the 0 index
books.splice(0, 3);
// console.log(books);

// console.log(deskItems);

// removes the 2 and 3 index and replaces them with the params below
deskItems.splice(2, 2, 'Notepad', 'Mouse');
// console.log(deskItems);
let removed = deskItems.splice(0, 2);

// we can also add elements without any removals by setting the delete count to 0
deskItems.splice(0, 0, 'Napkin', 'Coaster');
// console.log(deskItems);
// We can add a negative index to specify the starting point from the end of the array.

let numArray = [1, 2, 5];
// Inserts 3 and 4 into the array before the last index
numArray.splice(-1, 0, 3, 4);
// console.log(numArray); // 1, 2, 3, 4, 5

console.log('SLICE METHOD');
/* SYNTAX: arr.slice([start], [end])
It returns a new array copying to it all items from start index to end index (exluding the end index itself). Doesn't destroy the original array, but just creates new arrays from the method */

let arr = [1, 2, 3, 4, 5];

let slice1 = arr.slice(1); // [2, 3, 4, 5]
// console.log('Slice One: ');
// console.log(slice1);

let slice2 = arr.slice(1, 4);
// console.log('Slice Two: ');
// console.log(slice2);

console.log('CONCAT METHOD');
/** arr.concat(arg1, arg2)
 * accepts any number of arguments - either arrays or values and outputs a new new aray container items from arr then arg1 and arg1
 */
let origArr = ['House', 'Bird', 'Plane', 'Tree', 'Computer'];
let secArr = [
  ['house', 'apartment'],
  [
    'computer',
    'box',
    function addOne() {
      console.log(1 + 1);
    },
  ],
];
// console.log(origArr.concat('Team', secArr)); // ['House', 'Bird', 'Plane', 'Tree', 'Computer', Team, 4]

let thirdArr = {
  0: 'Broadway',
  1: ['Testing', 'Again'],
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
// console.log(origArr.concat(thirdArr));

console.log('forEACH METHOD');
/** arr.forEach(function(item, index, array)){
 * }
 
 */

let characters = ['Gandalf', 'Bilbo', 'Nazgul', 'Orcs'];

// characters.forEach((item, index) => {
//   console.log(
//     `${item} is a character in Lord of the Rings. In this array its index is ${index}.`
//   );
// });

console.log('SEARCHING IN ARRAYS');

/** arr.indexOf(item, from index) - looks for item starting from a particular index and returns the index where it was found
 *
 * arr.includes(item, from) - looks for itme starting from index, returns true if found
 */