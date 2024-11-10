function sayMyName(){
    console.log("K");
    console.log("I");
    console.log("N");
    console.log("G");
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("K");
}

// sayMyName()

function addTwoNumbers(num1, num2){  // parameters
    console.log(num1 + num2);
}

// addTwoNumbers(9, 6)  // arguments
// addTwoNumbers(5, "5")
// addTwoNumbers(7, "k")
// addTwoNumbers(3, null)

function mulTwoNums(num1, num2){  // parameters
    // console.log(num1 * num2);

    // let result  = num1 + num2
    // console.log("kingshuk");
    // return result

    return num1 * num2
}

const result1 = mulTwoNums(5, 6)

// console.log("Result: ", result1);


function loginUserMessege(username = "Hello"){
    if(!username) //(username === undefined)
    {
        console.log("Please enter the username.");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessege("Kingshuk"));
// console.log(loginUserMessege(""));
// console.log(loginUserMessege());


function caculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(caculateCartPrice(575, 999, 200, 656));

const user = {
    username: "kingshuk",
    price: 259
}

function handleOdject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}/-`);
}

// handleOdject(user)

handleOdject({
    username: "Kings",
    price: 399
})

const myNewArray = [250, 550, 400, 799]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1000, 799, 454, 199]));
