"use strict";
const names = ["Alice", "Bob", "Eve"];
// names.forEach(function(s) {
//     console.log(s.toUpperCase())
// });
names.forEach(s => console.log(s.toUpperCase()));
// 
function printName(person) {
    if (person.last === undefined) {
        person.last = "Unknonwn";
    }
    console.log(`${person.last}, ${person.first}`);
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
// Union types
function printId(id) {
    console.log("Your id is:" + id);
}
printId(101);
printId("102");
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
