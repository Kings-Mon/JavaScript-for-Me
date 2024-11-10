// singleton
// object.create

// object litetals

const mySylb = Symbol("key1")

const JsUser = {
    name: "Kingshuk",
    age: 20,
    location: "Kolkata",
    [mySylb]: "mykey1", //referring Symbol
    email: "kingshuk@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Wednesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["location"]);
// console.log(JsUser.name);
// console.log(JsUser[mySylb]);

JsUser.email = "kingshuk@genai.com"
// Object.freeze(JsUser)
JsUser.email = "kingshuk@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello, New User.");
}

JsUser.greetingTwo = function(){
    console.log("Hello, New User, ${this.name}");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
