const userEmail = "" //"kingshuk@ai.in"

if (userEmail) {
    console.log("Got User Email.");
} else {
    console.log("Didn't get user email.");
}

// falsy values

// false, 0, -0, BigInt (0n), "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is Empty!");
}

const EmptyObj = {}

if (Object.keys(EmptyObj).length === 0) {
    console.log("Object is Empty!");
}

false == 0  // true
false == '' // true
0 == ''     // true


// Nullish Coalescing Operator (??) : null / undefieed

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 15 ?? undefined
val1 = null ?? 10 ?? 100

console.log(val1);


// Terniaray Operater

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80.") : console.log("Less than 80.");
