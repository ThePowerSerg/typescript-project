"use strict";
const ContactStatus = {
    Inactive: 0,
    Active: 1
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
let contact = {
    id: 12345,
    name: "Jimmy Johnson",
    birthDate: 1540008000000,
    contactStatus: ContactStatus.Active
};
const t = getBirthDate(contact);
console.log(t);
