"use strict";


let calculateSum = (a, b, c, d, e) => {
    let sum = a + b + c + d + e;
    
    return sum;
}


let test = "This is a test variable"

let numbers = [1, 3, 5, 7, 9];

let r = calculateSum (...numbers);

console.log(r);


