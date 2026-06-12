"use strict";
// hoisting: greeter2 can be called before its definition
greeter2("called before definition");
function greeter(fn) {
    fn("Hello World");
}
function greeter2(a) {
    console.log(a);
}
const greeter3 = (a) => console.log(a);
greeter3("East Bound");
