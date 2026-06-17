"use strict";
// hoisting: greeter2 can be called before its definition
greeter2("called before definition");
function greeter2(a) {
    console.log(a);
}
// same as the above
const greeter3 = (a) => console.log(a);
// function calls
greeter3("East Bound");
// Arrow function example
const calcs = (x) => x * 2;
console.log(calcs(5));
// same as the above calcs, just the conventional function definition
function calcsLong(x) {
    return x * 2;
}
console.log(calcsLong(15));
// ** map ** example
// const numbers = [1, 2, 3]; //array definition
// const doubled = numbers.map(x => x * 2);
// console.log(doubled); // [2, 4, 6]
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
//uses a callback function
doubled.forEach(b => console.log(b));
// for...of loop: iterates over values of an iterable
for (const val of doubled) {
    console.log(val);
}
numbers.forEach(e => console.log(e * 5));
