// typeof
typeof "hello" // returns "string"
typeof true // returns "boolean"
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
typeof function hello() { } // returns "function"

// objects are similar to python dicts
var sister = {
    name: "Sarah", 
    age: 23,
    parents: [ "alice", "andy" ],
    siblings: ["julia"],
    favoriteColor: "purple",
    pets: true
};

// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]

// Methods of Objects
var sister = {
    name: "Sarah",
    age: 23,
    parents: [ "alice", "andy" ],
    siblings: ["julia"],
    favoriteColor: "purple",
    pets: true,
    paintPicture: function() { return "Sarah paints!"; }
};
  
sister.paintPicture();