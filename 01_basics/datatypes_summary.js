// Primitive

// 7 types :- String, Number, Boolean. Null, Undefined, Symbol, BigInt

const score = 1000
const scoreValue = 1000.6

const isLoggedIn = false
const outsidetemp = null
let unerEmail;

const ID = Symbol('321')
const anotherID = Symbol('321')

console.log( ID === anotherID);

const bigNumber = 16546516546168362989n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Krish", "Chitthi"]

let muObj = {
    name: "Kingshuk",
    age: 21,
}

const myFunction = function(){
    console.log("HELLO WORLD!");
}

console.log(typeof bigNumber);
console.log(typeof outsidetemp)
console.log(typeof isLoggedIn);;
console.log(typeof myFunction);
console.log(typeof anotherID);
console.log(typeof heros);


// https://tc39.es/ecma262/#sec-typeof-operator

// ==================================================================== //
// Return type of variables in JavaScript :- 

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// ============================================================== //

// Stack (Primitive), Heap (Non-Primitive)
// Stack gives you a copy, but Heap gives you a reference


let myInstaHandle = 'different_perspetive_007'

let GithubName = myInstaHandle
GithubName = "Kings_Mon"

console.log(myInstaHandle);
console.log(GithubName);

let userOne = {
    email: "kingshuk@gmail.com",
    upi: "king123@ydl"
}

console.log(userOne.email);