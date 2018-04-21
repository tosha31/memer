// Numbers
13
13 + 13
(2 * 13) + 4

// Strings
"It was the best of times 10 12"
'It was the worst of times'

// Booleans and Logical Operators
true 1, false 0
10 > 5 // true
10 > 5 && 10 < 5 // false
10 > 5 || 10 < 5 // true

// Empty Values
null
undefined

// Expressions and Variables
10;
1 + 2;
"It was the best" + "of times";
[ ]
let neighbor;
[ 'Bill' ]
neighbor = 'Bill';
neighbor = 123;
neighbor = false;
neighbor = 10 > 5; // true
console.log(neighbor); // true

const species = 'Human';
species = 'Martian' // ERROR

// Functions
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getday
function addOne(number) {
  console.log(number);
  // if number > 5
  let biggerNumber;
  return number + 1;

  // else number < 5
  biggerNumber = number * 5;
  return biggerNumber;
}

let result = addOne(12) // 13

// Control Flow (dayOfWeek above)
