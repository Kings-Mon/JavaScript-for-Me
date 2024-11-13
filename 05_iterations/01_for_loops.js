// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number.");
    }
    // console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
        // console.log(`Table of ${i} :-`);
        // console.log(`Outer Loop Value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop Value ${j} and Inner Loop ${i}`);
        // console.log( i + '*' + j + '=' + i*j );
    }
    
}

let myArray = ["Flash", "Batman", "SuperMan"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break nad continue

// for (let i = 0; i <= 20; i++) {
//         if (i == 5) {
//             console.log(`Detected 5`);
//             break  // Force Stop Here //
//         }
//     console.log(`Value of ${i}`);
// }

for (let i = 0; i <= 20; i++) {
        if (i == 5) {
            console.log(`Detected 5`);
            continue // Mercy for One Time
        }
    console.log(`Value of i is ${i}`);
}
