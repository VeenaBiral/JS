// The temporal dead zone (TDZ) is a concept in JavaScript that refers to the period between the
// creation of a variable (when the code starts executing) and its initialization (when it is assigned a value).
// During this period, the variable cannot be accessed, and any attempt to do so will result in a ReferenceError.


console.log(myAge)
var myAge = 50;   // undefined memory is allocated even before we initizale and it is in global object 
console.log(window.myAge);
console.log(this.myAge);

// for let and const 

//  in case of let we can not access before initialization 
console.log(a)
let a = 0;  //ReferenceError: Cannot access 'mymemory' before initialization

// let a =10;  //SyntaxError: Identifier 'a' has already been declared (at letconst.js:17:5)

// we can not declare it 2 times

const b=10;   //SyntaxError: Missing initializer in const declaration (at letconst.js:21:7)

b=100