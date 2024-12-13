//  Immediately Invoked Function Expressions (IIFE)

(function new1() {
    // named iife (new)
    console.log("DB CONNECTED")
}) ();

( (name) => {
    console.log(`DB CONNECTED  TO ${name}`)
} ) ("uttam");