const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curr_val) {
//     console.log(`acc: ${acc} & curr_val: ${curr_val}`);
//     return acc + curr_val
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);


const shopingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "Py course",
        price: 999
    },
    {
        itemName: "Java course", price: 1999
    },
    { itemName: "WebDeb course", price: 5999 },
]

const priceToPay = shopingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
