
// Records create objects where all keys are of type keys and all values are of type Type: Record<Keys, Type>

const scores: Record<string, number> = {
    Alice: 95,
    Bob:87,
    Sergio: 100
}

console.log(scores.Sergio)
console.log(scores["Alice"])