function showData<T>(arg: T): string{
    return `O dado é ${arg}`
}

console.log(showData(5))
console.log(showData("Testando generic"))
console.log(showData(true))
console.log(showData([]))
console.log(showData(["teste"]))


console.log("======================")
console.log("Constaints em generic")

function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é ${obj.name}`
}

const myObj = { name: "Porta", cor: "Branca" }
const otherProduct = {name: "Carro", wheels: 4, engine: 1.0}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))


console.log("======================")
console.log("Interfaces com generic")

interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Cars = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Cars = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" }
const myPen: Pen = { name: "Caneta Bic", wheels: false, engine: false, color: "Azul" }

console.log(myCar)
console.log(myPen)

console.log("======================")
console.log("Type Parameters")

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key.toString()} está presente no objeto e tem valor ${obj[key]} `
}

const server = {
    hd: "2TB",
    ram: "32GB"
}

console.log(getSomeKey(server, "ram"))