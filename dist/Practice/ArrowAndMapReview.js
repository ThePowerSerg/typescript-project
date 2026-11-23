"use strict";
const materials = [
    { id: 1, name: "Hydrogen" },
    { id: 2, name: "Helium" },
    { id: 3, name: "Lithium" },
    { id: 4, name: "Beryllium" },
];
console.log(materials.map((m) => m.name.length));
console.log(materials.find((x) => x.name === "Helium"));
