let score = "mondal" // false //undefined // null //"5f5"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN (Not a Number)

// "99" => 99
// "5ff5" => NaN
// true => 1 / false => 0

let isLoggedIn = "King" // "" // 0 // 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true ; 0 => flase
// "" => false
// "King" => true

let someNumber = 6546

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); 

// ******************************* Operations ***********************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(5+5);
// console.log(5-5);
// console.log(5*5);
// console.log(5**5);
// console.log(5/5);
// console.log(5%5);

let str1 = "Hello"
let str2 = " Moto"

let str3 = str1 + str2
console.log(str3);

// console.log("6" + 9);    // "69" (string + number => string)
// console.log(6 + "9");    // "69" (number + string => string)
// console.log("6" + "9");  // "69" (string + string => string)
// console.log("6" + 9 + 4);    // "694" (string + number => string, then string + number => string)
// console.log(6 + 9 + "4");    // "154" (number + number => number, then number + string => string)
// console.log((9 + 3) * 5 % 8);   // 0 (first do the addition, then multiplication, then modulus)


// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 9 + 9 


let gameCounter = 666

console.log(+gameCounter);  // 666 (Unary +, no change)
console.log(-gameCounter); // -666 (Unary -, negates the number)
// console.log(--gameCounter);
// console.log(gameCounter--);
console.log(++gameCounter); // 667 (Pre-increment, increments first then returns the value)
console.log(gameCounter++); // 667 (Post-increment, returns the current value, then increments)

console.log(+-gameCounter); // -667 (Unary + followed by unary -, first negates, then returns the negated value)
console.log(-+gameCounter); // -667 (Unary +, converts to number, then unary - negates)

console.log(--gameCounter); // 666 (Pre-decrement, decrements first then returns the value)
console.log(gameCounter--); // 666 (Post-decrement, returns the current value, then decrements)
