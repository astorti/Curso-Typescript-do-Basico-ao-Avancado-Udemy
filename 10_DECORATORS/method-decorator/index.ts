console.log("METHOD DECORATOR")

function enumerable(value: boolean) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    };
}

class Machines {
    name: string

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        return `O nome da máquina é: ${this.name}`
    }
}

const machine1 = new Machines("Trator")

console.log(machine1.showName())


