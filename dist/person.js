var PeopleStatus;
(function (PeopleStatus) {
    PeopleStatus[PeopleStatus["Inactive"] = 0] = "Inactive";
    PeopleStatus[PeopleStatus["Active"] = 1] = "Active";
    PeopleStatus[PeopleStatus["New"] = 2] = "New";
})(PeopleStatus || (PeopleStatus = {}));
const p = {
    id: 1234,
    name: "Luis",
    birthDate: new Date("10/10/2020"),
    status: PeopleStatus.Active
};
function clone(source) {
    return source;
}
const a = { id: 123, name: "Test", birthDate: new Date("10/10/2020"), status: PeopleStatus.New };
const b = clone(a);
console.log(b);
