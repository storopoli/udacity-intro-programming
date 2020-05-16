// this is a single-line comment

/*
this is
a multi-line
comment
*/

// Variables
var greeting = "Hello"

console.log(greeting)

// String Index
var quote = "Stay awhile and listen!";
console.log(quote[6]);
console.log(quote.charAt(6));

// ASCI Values
console.log(quote.charCodeAt(6));

// Escaping characters
console.log("Up up\n\tdown down");

// if statements
var a = 10;
var b = 20;
// a comparison - we will study this in detail in upcoming lesson

if (a>b) { // The outcome of a>b will be a boolean
    console.log("Variable `a` has higher value"); // if a>b is true
} else {
    console.log("Variable `b` has higher value"); // if a>b is false
}

// calculating the square root of a negative number will return NaN
Math.sqrt(-10);

// trying to divide a string by 5 will return NaN
"hello"/5;

// Null vs undefined
var x = null; //null
var x; //undefined
