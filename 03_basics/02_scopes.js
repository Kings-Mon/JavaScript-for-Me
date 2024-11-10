// var c = 900
let a = 200
const b = 500
if (true){
    let a = 20
    const b = 50
    // console.log("INNER a : " ,a);
}
// console.log(a);
// console.log(b);


function one(){
    const username = "Kingshuk"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    // ReferenceError: website is not defined

    two()
}

// one()

if (true) {
    const username = "kingshuk"
    if (username === "kingshuk") {
        const website = " on youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ==========++++++++++ INTRESTING +++++++++========== //

function addone(num){
    return num + 1
}

console.log(addone (50))

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(10)); 
