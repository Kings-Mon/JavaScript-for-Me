const marvel_heros = ["IronMan", "Thor", "Spider-man", "CaptainAmerica"]

const dc_heros = ["Superman", "Batman", "Flash", "WonderWoman"] 

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[4]);

const allHeros1 = marvel_heros.concat(dc_heros)
console.log(allHeros1);

const allHeros2 = [...marvel_heros, ...dc_heros]    // Spread Operator (...)
console.log(allHeros2);

const newArray = [1, 3, 5, [9, 8, 7], 6, [5, 7, [2, 4]]]

const real_array = newArray.flat(Infinity)    // flat() method flatten the nested arrays into a single array.
console.log(real_array);

console.log(Array.isArray("Kingshuk"))
console.log(Array.from("Kingshuk"))
console.log(Array.from({name : "kingshuk"})); // Intresting

let score1 = 500
let score2 = 700
let score3 = 900

console.log(Array.of(score1, score2, score3));
