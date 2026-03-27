// ============================================================
// COMP 384: HW 4 - JavaScript Foundations Coding Assignment
// ============================================================

// ------------------------------------------------------------
// Section 1: Basic Rules and Data Types
// ------------------------------------------------------------

// "Exercise 1: Formatting and Naming (Code Correction)"
console.log("Exercise 1: Formatting and Naming (Code Correction)");
var thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
  console.log(thisIsANewVariable);
}

// Exercise 2: Defining Core Data Types
console.log("Exercise 2: Defining Core Data Types");
let student = `Quang Tran`;   // string using backticks (template literal)
let number = 0.67;                // number (float)
let isTrue = true;             // boolean (no quotation marks)
console.log(student);
console.log(number);
console.log(isTrue);

// Exercise 3: Single-Line Comments
console.log("Exercise 3: Single-Line Comments");
// currentScore stores the student's current grade
let currentScore = 95;

// Exercise 4: Equality Comparison
console.log("Exercise 4: Equality Comparison");
console.log('100' == 100);   // true  — value equality
console.log('100' === 100);  // false — absolute strict equality

// ------------------------------------------------------------
// Section 2: Conditionals and Control Flow
// ------------------------------------------------------------

// Exercise 5: Ternary Operator
console.log("Exercise 5: Ternary Operator");
let isWeekend = false;
let schedule;
schedule = isWeekend ? "Day off" : "Work day";
console.log(schedule); // "Work day"

// Exercise 6: If/Else Structure
console.log("Exercise 6: If/Else Structure");
let userAge = 16;
if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// Exercise 7: Logical AND Operator
console.log("Exercise 7: Logical AND Operator");
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("Ready to process");
}

// Exercise 8: For Loop
console.log("Exercise 8: For Loop");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Exercise 9: Loop Control
console.log("Exercise 9: Loop Control");
for (let i = 0; i <= 9; i++) {
  if (i === 7) {
    break; // terminate early when i reaches 7
  }
  console.log(i);
}

// Exercise 10: Ensuring Execution
console.log("Exercise 10: Ensuring Execution");
let counter = 10;
do {
  console.log("Running once");
} while (counter < 10); // condition is false immediately, so loop runs only once

// ------------------------------------------------------------
// Section 3: Functions and Data Structures
// ------------------------------------------------------------

// Exercise 11: Function Definition
console.log("Exercise 11: Function Definition");
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log(resultArea); // 50

// Exercise 12: Array Manipulation
console.log("Exercise 12: Array Manipulation");
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');              // 1. Add 'Grape' to the end
fruitList.shift();                    // 2. Remove first item ('Apple')
console.log(fruitList.indexOf('Banana')); // 3. Log index of 'Banana'

// Exercise 13: Array Copying
console.log("Exercise 13: Array Copying");
// slice() performs a shallow copy where primitive values (strings, numbers,
// booleans) are fully independent, but nested objects inside the copy
// still reference the same memory locations as the original. Mutating a nested
// object in clonedData would also affect originalData.
let originalData = [1, 2, 3, 4, 5];
let clonedData = originalData.slice();
console.log(clonedData); // [1, 2, 3, 4, 5]

// Exercise 14: Object Constructor
console.log("Exercise 14: Object Constructor");
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

// Exercise 15: Object Instantiation
console.log("Exercise 15: Object Instantiation");
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log(animalArray);
