interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`)
}

const itemCoords: Point = {
    x: 10,
    y: 15,
    z: 12,
}

showCoords(itemCoords)

console.log("====================")

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = { name: 'Andrew', age: 34}

console.log(somePerson)