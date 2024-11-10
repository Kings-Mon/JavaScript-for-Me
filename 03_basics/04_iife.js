// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();


( (name) => {
    console.log(`TWO DB CONNECTED BY ${name}`);
}) ('Kingshuk')


// Example :

var name = "Global Name";

(function() {
    var name = "IIFE Name";
    console.log(name); // "IIFE Name"
})();

console.log(name); // "Global Name"
