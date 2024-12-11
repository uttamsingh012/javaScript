// console.log('Initialization complete', Temporal.Now.instant());


let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let MyCreatedDate = new Date("2023-01-14")
console.log(MyCreatedDate.toLocaleString());


let MyCreatedDate1 = new Date("01-14-2024")
console.log(MyCreatedDate1.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);  // print milli second
console.log(MyCreatedDate1.getTime());

// convert millisec into date
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 11 => December  0 => January
console.log(newDate.getDay());   // 3 => Wednesday

newDate.toLocaleString('default', {
    weekday: "long",
})