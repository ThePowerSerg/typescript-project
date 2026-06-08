type ContactName = string

enum ContactStatus{
    Inactive,
    Active
}

interface Address {
    street?: string
    city?: string
    state?: string
    zip?: string

}

interface Person extends Address {
    id: number
    name: ContactName
    birthDate: Date
    contactStatus: ContactStatus
}

const myPerson: Person = {
    id: 1,
    name: "Sergio",
    birthDate: new Date("1/1/1981"),
    street: "20 Franklin Rd",
    city:"Nowell",
    state: "MA",
    zip: "02061-1541",
    contactStatus: ContactStatus.Active
}