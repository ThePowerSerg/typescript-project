"use strict";
// Type inference. Typescript is able to infer the type (number) given the variable assignment.
let x = 0;
//same definition
let y = 5;
let arr = [];
// for loop: classic C-style, runs while condition is true
for (let i = 0; i < y; i++) {
    arr.push(i);
}
// while loop: runs while condition is true
// while (x < y) {
//     x++
// }
// for...of loop: iterates over values of an iterable
for (const val of arr) {
    console.log(val);
}
