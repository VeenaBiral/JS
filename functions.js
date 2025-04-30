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
