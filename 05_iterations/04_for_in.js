// for in

const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by Apple'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}.`);
}

const programming = ['js', 'java', 'rb', 'py', 'cpp']

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United Staes of America')
map.set('Fr', 'France')
map.set('IN', 'India')

// for (const key in map) {
//     console.log(key); 
// }

for (const [key, value] of map) {
    // console.log(key, value);
}
