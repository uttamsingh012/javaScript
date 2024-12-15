const myNums = [1,2,3]
//  const myTotal = myNums.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval 
//  },0) // 0 is accumulator value which is used at first time next it will automatically bythe addition of 
 // (0+1 = 1) next time acc= 1
 // (1+2=3) next time acc val = 3

//  console.log(myTotal);


const myTotal = myNums.reduce( (acc, currval) => acc + currval ,0)
console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const addPrice = shoppingCart.reduce( (acc, item) => (acc+item.price), 0)
console.log(addPrice);