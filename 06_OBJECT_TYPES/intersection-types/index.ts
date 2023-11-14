interface Carro {
    name: string
    motor: number
}

interface Marca {
    brand: string
}

type CarroWithMarca = Carro & Marca

const car1: CarroWithMarca = {
    name: "Onix",
    motor: 1.0,
    brand: "Chevrolet"
}

console.log(car1)
console.log(car1.motor)