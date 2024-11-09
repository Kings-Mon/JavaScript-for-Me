const name = "Kingshuk"

const repos = 30

// console.log(name + " has " + repos);

console.log(`Hello, I am ${name} and I have ${repos} Repositary.`);

const gameName = new String("kingshukkm")

console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)  //no negative value
console.log(newString);

const new2String = gameName.slice(-10, 5)
console.log(new2String);


const new3String = "    mondal   "
console.log(new3String);
console.log(new3String.trim());

const url = "https://kings.com/kingshuk%20mondal"
console.log(url.replace('%20', '-'));
console.log(url.includes('king'));

const newGame = "king-shuk-mon-dal"
console.log(newGame.split('-'));
