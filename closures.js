// a closure is a function that captures variables from its surrounding scope. This allows the 
// function to access those variables even after the outer function has finished executing.

function abc(){
    var a =20;
     function x(){
        console.log(b)
     }
}
abc();