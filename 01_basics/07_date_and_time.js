// DATES

let myDate = new Date();
console.log(myDate);  // Outputs the full date-time
console.log(myDate.toString());  // Outputs a string representation of the date
console.log(myDate.toDateString());  // Outputs just the date portion (e.g., 'Sat Nov 09 2024')
console.log(myDate.toLocaleString());  // Localized full date and time
console.log(myDate.toLocaleDateString());  // Localized date portion only

// let myCreateDate = new Date(2024, 5, 17, 10, 30)
// let myCreateDate = new Date("2024-06-17")
let myCreateDate = new Date("06-17-2024");
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);  // Outputs the timestamp (milliseconds since 1970-01-01)
// console.log(myCreateDate.getTime());  // Timestamp for 'myCreateDate'
// console.log(Math.floor(Date.now()/1000));  // Timestamp in seconds (without milliseconds)

let newDate = new Date();
console.log(newDate);  // Current date-time
console.log(newDate.getMonth() + 1);  // Month (0-based, hence +1)
console.log(newDate.getDay());  // Day of the week (0=Sunday, 1=Monday, etc.)


newDate.toLocaleDateString('default', {
    weekday: 'long',
});

const fulldate = newDate.toLocaleDateString('default', {
    weekday: 'long',    // Full weekday name
    year: 'numeric',    // Full year (e.g., 2024)
    month: 'long',      // Full month name (e.g., January, February)
    day: 'numeric',     // Numeric day of the month (e.g., 7)
});

console.log(fulldate);
