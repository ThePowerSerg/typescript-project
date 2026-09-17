"use strict";
const ContactStatus = {
    Inactive: 0,
    Active: 1,
    New: 2
};
const myPerson = {
    id: 1,
    name: "Sergio",
    birthDate: new Date("1/1/1981"),
    street: "20 Franklin Rd",
    city: "Nowell",
    state: "MA",
    zip: "02061-1541",
    contactStatus: ContactStatus.Active
};
function printAddressPart(value) {
    if (value === undefined) {
        console.log("not provided");
    }
    else {
        console.log(value);
    }
}
printAddressPart(myPerson.street);
printAddressPart(myPerson.zip);
function getBirthDate(person) {
    if (typeof person.birthDate === "number") {
        return new Date(person.birthDate);
    }
    else if (typeof person.birthDate === "string") {
        return Date.parse(person.birthDate);
    }
    else {
        return person.birthDate;
    }
}
const getBirthDate2 = (person) => {
    if (typeof person.birthDate === "number") {
        return new Date(person.birthDate);
    }
    else if (typeof person.birthDate === "string") {
        return Date.parse(person.birthDate);
    }
    else {
        return person.birthDate;
    }
};
let contact = {
    id: 12345,
    name: "Jimmy Johnson",
    birthDate: 1540008000000,
    contactStatus: ContactStatus.Active
};
const t = getBirthDate(contact);
console.log(t);
const keys = Object.keys(myPerson);
console.log(keys);
const myContact = {
    id: 1234,
    name: "jimmy"
};
const getValue = (source) => source.name;
// same as
const getValue2 = (source) => { return source.name; };
// display value
console.log(getValue(({ id: 12, name: "find" })));
// returns the value based on given key/property name. Extends means follow the T rules.
const getNewValue = (source, pName) => source[pName];
function getNewValueFunc(source, pName) {
    return source[pName];
}
const value = getNewValue({ id: 123, name: "serg" }, "name");
console.log(value);
