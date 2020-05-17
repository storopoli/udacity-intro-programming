/*
Always declare functions in the top of the script
Always declare variables in the top of the functions
*/

// declares the sayHello function
function sayHello() {
    var message = "Hello!"
    return message; // returns value instead of printing it
  }
  
  // function returns "Hello!" and console.log prints the return value
console.log(sayHello());

function findAverage(x, y) {
    var answer = (x + y) / 2;
    return answer;
  }
  
var avg = findAverage(5, 9);
console.log(avg);

// Function expressions: Assign a function to a variable
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
};