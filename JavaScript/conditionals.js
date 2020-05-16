// If Else statements
var price = 15.00;
var money = 20.00;

if (price < money) {
    console.log("buy the hammer")
} else {
    console.log("don't buy the hammer")
}

// If Else If statements
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

// Logical Operators
// && AND
// || OR
// ! NOT
var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") { // && is AND
  console.log("go to the park");
}

// Ternary Operator ?
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color); //Prints: "green"

// Switch Operator
var option = 7;
switch (option) {
    case 1:
      console.log("You selected option 1.");
      break;
    case 2:
      console.log("You selected option 2.");
      break;
    case 3:
      console.log("You selected option 3.");
      break;
    case 4:
      console.log("You selected option 4.");
      break;
    case 5:
      console.log("You selected option 5.");
      break;
    case 6:
      console.log("You selected option 6.");
      break;
    default:
        console.log("You selected neither options available");
  }