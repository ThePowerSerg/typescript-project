const ContactStatus = {
    Inactive: 0,
    Active: 1,
    New: 2
} as const

type ContactStatusType = typeof ContactStatus[keyof typeof ContactStatus]

// another option to enum:
type ContactStatusSimple = "inactive" | "active" | "new"


type ContactName = string
type ContactBirthDate = Date | string | number

interface Address {
    street?: string
    city?: string
    state?: string
    zip?: string

}

interface Person extends Address {
    id: number
    name: ContactName
    birthDate?: ContactBirthDate
    contactStatus?: ContactStatusType
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
type Combined = Address["street" | "zip"]

function printAddressPart(value: Combined) {
    if (value === undefined) {
        console.log("not provided")
    } else {
        console.log(value)
    }
}
 printAddressPart(myPerson.street)
 printAddressPart(myPerson.zip)


function getBirthDate (person: Person) {
    if (typeof person.birthDate === "number") {
        return new Date(person.birthDate)
    }
    else if (typeof person.birthDate === "string") {
        return Date.parse(person.birthDate)
    }
    else {
        return person.birthDate
    }
}

const getBirthDate2 = (person: Person) => {
    if (typeof person.birthDate === "number") {
        return new Date(person.birthDate)
    }
    else if (typeof person.birthDate === "string") {
        return Date.parse(person.birthDate)
    }
    else {
        return person.birthDate
    }
}

let contact: Person = {
    id: 12345,
    name: "Jimmy Johnson",
    birthDate: 1540008000000,
    contactStatus: ContactStatus.Active
}

const t = getBirthDate(contact)
console.log(t)

const keys = Object.keys(myPerson) as (keyof Person)[]
console.log(keys)


//-------------------------------- UnionTypes -------

type AddressableContact = Person & Address

const myContact: AddressableContact = {
    id:1234,
    name: "jimmy"
}

type ContactFields = keyof Person

const getValue = (source: Person) => source.name
// same as
const getValue2 = (source: Person) => { return source.name }
// display value
console.log(getValue(({id:12, name: "find"})))


// returns the value based on given key/property name. Extends means follow the T rules.
const getNewValue = <T, V extends keyof T>(source: T, pName: V) => source[pName]

function getNewValueFunc<T, V extends keyof T>(source: T, pName: V) {
    return source[pName]
}

const value = getNewValue({id:123, name: "serg"}, "name")
console.log(value)