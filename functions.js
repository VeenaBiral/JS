// Funtion statment
function x(){
console.log('hello world x');
}

// Funtion expression

// function which is assigned as a value to variable called as function expression
// variable that holds an anonymous function
var a = function (){
console.log('hello world y');
}
x()
y() 
// in case of function statment and expression the difference is hoisting 
// if we call x , y before initilazation the x will be allocated memory but y will
// give and ref error that y is not a function

// Named function expression
var b = function xyz(){
console.log('hello world');
}
// Funtion Declaration
// function statment and decleration are same at the time

// Anonmysous function
// funtion without a name is called as anonmyous function
// function (){

// }

// First class function


//differnce between parameters and arguments
let b = (param1, param2) => {
 return sum = param1 + param2
}
b(1, 2);

// first class functions 
// Assigned to variables:
//returned fron another functions
const sayHello = function() {
   console.log('Hello!');
   };
  

   function createGreeter(name) {
    return function() {
     console.log(`Hello, ${name}!`);
     };
     }
    
     const greetAlice = createGreeter('Alice');
     greetAlice(); // Output: Hello, Alice
    


//Arrow function




// global space 
var x = 1;
a();
b();
console.log(x);

function a () {
  var x = 10;
  console.log(x)
}


// local space anything inside a function takes as local space ex: x=100
function b () {
  var x =100;
  console.log(x);
}
