"use strict";
function greet(person, date) {
    //console.log(`Hello ${person}!, today's date is: ${date.toLocaleDateString('en-US')}`)
    console.log(`Hello ${person}!, today's date is: ${date.toDateString()}`);
}
greet("Sergio", new Date());
