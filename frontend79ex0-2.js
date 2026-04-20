const arr = [100,500,700,800,200]

const res =''
for (let i=0; i<arr.length; i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j] == '1500'){
            res = arr[i],arr[j];
        }
    }
}
console.log(res)

const arr2 =[1,2,3,4,5]
const ress = arr2.filter((x)=>x>3)
console.log(ress)

// difference between normal function and arrow function?
// hoisting normal function can be hoisted and arrow function cant
// if we need a dynamic this then we can use normal function bcz this doesnt work in arrow function

/// Difference between var, let, and const?
// var → function-scoped, can be redeclared
// let → block-scoped, can be reassigned
// const → block-scoped, cannot be reassigned

// function currying?
// Currying is a technique where a function takes one argument at a time and returns another
// function until all arguments are received.

// Difference between premitive vs non-premitive?
// PRIMITIVE DATA TYPES-`Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`, and `BigInt`. 
// They are immutable and stored by value
// NON-PRIMITIVE DATA TYPES
// Also called reference types include `Objects`, `Arrays`, `Functions`, and others. 
// These are mutable and stored by reference, so when you assign an object or array to a new variable,
// it points to the same memory location— changes to one affect the other.

