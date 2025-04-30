// Hoisting in js 
// we can acces variables and functions we before we initialize it 

// var x = 7;
// function getName() {
//     console.log('hello world')
// }

// getName();
// console.log(x);

getName();
console.log(x);
console.log(getName);
sum();

var x = 7;
function getName() {
    console.log('hello world')
}

// Arrow function here if i call  sum() before initialization sere sum behaves as variable and 
// initially it is stored as undefined 
let sum = () => {
 console.log('hello')
}

// undefined and not defined
console.log(myage)   // undefined : memory is allocated to this variable
myage = 7;       

console.log(z);  // not defined : memory is not allocated to variable this as we did not define


