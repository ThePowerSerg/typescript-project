"use strict";
// spread operator: expands an array into individual elements
const baseNumbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const combined = [...baseNumbers, ...moreNumbers];
combined.forEach(e => console.log(`forEachCombined: ${e}`));
const combinedPlus = combined.map(y => y * 10);
//forEach example
combinedPlus.forEach(e => console.log(`forEachCombinedPlus: ${e}`));
//for Example
for (const e of combinedPlus) {
    console.log(`for: ${e}`);
}
// copying an array 
const original = [1, 2, 3];
//const copy = [...original]
const copy = [0, ...original, 4];
copy.push(5);
console.log(copy);
const nums = [1, 2, 3];
console.log(Math.max(...nums));
//same as Math.max(1,2,3)
