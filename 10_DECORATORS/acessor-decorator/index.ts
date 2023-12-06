console.log("ACESSOR DECORATOR")

function enumerable2(value: boolean) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    };
}

class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable2(true)
    get showName() {
        return `Nome do monstro: ${this.name}`
    }

    @enumerable2(false)
    get showAge() {
        return `Idade do monstro: ${this.age}`
    }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

