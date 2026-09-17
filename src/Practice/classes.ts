export {}

// Basic class structure
class Person {
    name: string
    age: number

    // constructor runs automatically when "new Person()" is called
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const p1 = new Person("Sergio", 40)
p1.greet()

// Shorthand constructor — declares and assigns properties in one step
class PersonShort {
    constructor(
        public name: string,
        public age: number
    ) {}
}

const p2 = new PersonShort("Sergio", 40)
console.log(p2.name)

// readonly — can only be set in the constructor
class PersonReadonly {
    constructor(
        public name: string,
        readonly id: number
    ) {}
}

const p3 = new PersonReadonly("Sergio", 1)
p3.name = "Bob"   // ✅ allowed
// p3.id = 2      // ❌ error — readonly

// Optional properties with defaults
class PersonWithCity {
    name: string
    age: number
    city: string

    constructor(name: string, age: number, city: string = "Unknown") {
        this.name = name
        this.age = age
        this.city = city
    }
}

const p4 = new PersonWithCity("Sergio", 40, "Norwell")
const p5 = new PersonWithCity("Jimmy", 30)  // city = "Unknown"
console.log(p4.city)  // "Norwell"
console.log(p5.city)  // "Unknown"

// Inheritance — one class extending another
class Animal {
    constructor(public name: string) {}

    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name)  // initializes the parent class
    }

    speak() {
        console.log(`${this.name} barks`)  // overrides parent method
    }
}

const dog = new Dog("Rex", "Labrador")
dog.speak()  // "Rex barks"
