// While Loops
var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}

// Don't run this code
/*
while (true) {
    console.log("true is never false, so I will never stop!");
  }
*/

// For Loops
/*
for ( start; stop; step ) {
  // do this thing
}
*/

for (var i = 0; i < 6; i = i + 1) {
    console.log("Printing out i = " + i);
  }

// Nested For Loops
for (var x = 0; x < 5; x = x + 1) {
    for (var y = 0; y < 3; y = y + 1) {
        console.log(x + "," + y);
    }
}

// Increment and Decrement
 /*
x++ or ++x // same as x = x + 1 
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5
*/
