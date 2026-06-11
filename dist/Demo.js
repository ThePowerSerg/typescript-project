"use strict";
var ContactStatus;
(function (ContactStatus) {
    ContactStatus[ContactStatus["Inactive"] = 0] = "Inactive";
    ContactStatus[ContactStatus["Active"] = 1] = "Active";
})(ContactStatus || (ContactStatus = {}));
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
