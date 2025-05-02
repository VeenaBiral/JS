//*** 
// Which ever variables and functions we can acces inside a block is called as blocl scope

//block
{

}

//scope
// a is hoisted in global object
// b & c have sepeate Block scope where they are hoisted (they are stored in seperate memory space)
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a)  //10
    console.log(b)  //20
    console.log(c)  //30
}

    console.log(a)  //10
    console.log(b)  
    console.log(c)  


// function x (){
//     var a = 10;   
// }
// x();
// console.log(a)

// there will be error becuase i am trying to acces in global scope , but variable is define in local scope

function abc(){
    console.log(abc.xyz)
}
 abc();
abc.xyz = 400;
abc.xyz=200
abc();

