interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human{
    superpowers: string[]
}

const human1: Human = {
    name: "Peter",
    age: 42
}

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superpowers: [ "Kamehameha", "Genki Dama"]
}

console.log(human1)
console.log(goku)
console.log(goku.superpowers[1])