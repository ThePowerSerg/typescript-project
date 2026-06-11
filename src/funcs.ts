const names = ["Alice", "Bob", "Eve"]

// names.forEach(function(s) {
//     console.log(s.toUpperCase())
// });

names.forEach(s => console.log(s.toUpperCase()));

// 
function printName(person: {first: string; last?: string}){
    if (person.last === undefined)
    {
        person.last = "Unknonwn";
    }
    console.log(`${person.last}, ${person.first}`)
}
printName({first: "Bob"});
printName({first: "Alice", last: "Alisson"})

// Union types
function printId(id: number | string) {
    console.log("Your id is:" + id);
}
printId(101)
printId("102")

// Type Alias
type Point = {
    x: number;
    y: number;
}

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });