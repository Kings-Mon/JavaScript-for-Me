// DATES

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreateDate = new Date(2024, 5, 17, 10, 30)
// let myCreateDate = new Date("2024-06-17")
let myCreateDate = new Date("06-17-2024")
// // console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDay());

newDate.toLocaleDateString('default', {
    weekday: 'long',
})