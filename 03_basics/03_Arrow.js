const user = {
    username: "kingshuk",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website!`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "King"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "KingMon"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "KingMon"
    console.log(this);
}

chai()

const addFive = (num1) => {
    return num1 + 5
}
console.log(addFive(8));

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ({username: "kingshuk"}) //( num1 + num2 )

console.log(addTwo(7, 5));  // { username: "kingshuk" }
