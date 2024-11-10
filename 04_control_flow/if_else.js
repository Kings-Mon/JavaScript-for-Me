// if - else

const isUserLoggedIn = true
const temperature = 35

if ( temperature === 35 ){
    console.log("Temp less then 50");
} else {
    console.log("Temperature is gretter than 50");
}

// 2 <= 2, 3 != 2
// <, >, <=, >=, ==. !=
// 2 === "2"

// const score = 500

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);   
// }
// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2"); // Implicit Scope //

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard && 2 == 3) {
    console.log("Allow to buy courses.");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In.");
}
