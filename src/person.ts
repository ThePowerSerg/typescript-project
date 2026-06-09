enum PeopleStatus {
    Inactive,
    Active,
    New
}

interface People {
    id: number
    name: PeopleName
    birthDate: Date,
    status: PeopleStatus
}

const p: People = {
    id: 1234,
    name: "Luis",
    birthDate: new Date ("10/10/2020"),
    status: PeopleStatus.Active
}

// type alias
type PeopleName = string


function clone(source: People): People {
    return source
}

const a: People = {id: 123, name: "Test", birthDate: new Date("10/10/2020"), status: PeopleStatus.New}
const b = clone(a)

console.log(b)