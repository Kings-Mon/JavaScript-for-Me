// ===================== Numbers =======================

const score = 900
console.log(score);

const balance = new Number(500)
console.log(balance);

// console.log(balance.toString());  // Converts number to string
// console.log(balance.toString().length);  // Length of the string "500" → 3
// console.log(balance.toFixed(2));  // Converts to fixed-point notation with 2 decimal places → "500.00"

const newNumber = 6625.8949
// console.log(newNumber.toPrecision(3));  // "6620" (rounds the number to 3 significant digits)

const thousands = 10000000;
// console.log(thousands.toLocaleString());  // "10,000,000" (Locale-based formatting)


// ********************** Maths ************************

// console.log(Math.abs(-59));  // 59
// console.log(Math.round(4.3));  // 4 (Rounds to the nearest integer)
// console.log(Math.ceil(4.3));  // 5 (Rounds up to the nearest integer)
// console.log(Math.floor(4.3));  // 4 (Rounds down to the nearest integer)
// console.log(Math.max(5,9,7,2));  // 9 (Finds the maximum value)
// console.log(Math.min(5,9,7,2));  // 2 (Finds the minimum value)

console.log(Math.random());  // Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(Math.random() * 10) + 1);  // Random number between 1 and 10

const min = 15
const max = 30

console.log(Math.floor(Math.random() * (max - min + 5)))
