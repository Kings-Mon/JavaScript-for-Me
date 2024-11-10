// Array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shatiman", "bheem", "naagraj"]

const newArry2 = new Array(9,8,7,6)
console.log(newArry2[1])

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); 
// console.log(myArr.indexOf(9)); 

const newArry = myArr.join()

// console.log(myArr);
// console.log(newArry);

// Slice, splice

console.log("A ", myArr);

const myA1 = myArr.slice(1, 3)

console.log(myA1);
console.log("B ", myArr);   // (no change yet, because slice does not modify the array)

const myA2 = myArr.splice(1, 3)
console.log("C ", myArr);   // (myArr after splice operation, elements [1, 2, 3] removed)
console.log(myA2);          // (the elements removed by splice)         
