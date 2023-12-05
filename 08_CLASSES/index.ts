// 01 - FIELDS

class Users {
    name!: string
    age!: number
}

const george = new Users()
console.log(george)

george.name = "George"
george.age = 58

// 02 - CONSTRUCTOR

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new NewUser("João", 22)
console.log(joao)


// 03 - CAMPO READONLY

class newCars {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const carro1 = new newCars("Fusca")
console.log(carro1)
console.log(carro1.wheels)

carro1.name = "Fusca Turbo"
console.log(carro1.name)


// 04 - HERITAGE AND SUPER

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine("Trator")
console.log(trator)

class Airplaine extends Machine {
    passengers

    constructor(name: string, passengers: number) {
        super(name)
        this.passengers = passengers
    }
}

const airplaine1 = new Airplaine("Boing 747", 410)
console.log(airplaine1)

// 05 - METHODS

class People {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger!")
    }
}

const jimmy = new People("Jimmy")

console.log(jimmy.name)
jimmy.greeting()


// 06 - THIS

class Trucks {
    model
    hp
    
    constructor(model:string, hp: number) {
    this.model = model
    this.hp = hp
    }

    showDetails() {
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`)
    }
}
    
const truck1 = new Trucks("Volvo", 400)
const truck2 = new Trucks("Scania", 500)
    
truck1.showDetails()
truck2.showDetails()
    

// 07 - GETTERS

class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name= name
        this.surname = surname
    }

    get fullName() {
        return this.name + " " + this.surname
    }
}

const isaacAsimov = new Person("Isaac", "Asimov")

console.log(isaacAsimov.name)
console.log(isaacAsimov.fullName)

// 08 - SETTERS

class Coords {
    x!: number
    y!: number

    set fillx(x: number) {
        if (x === 0) {
            return
        }

        this.x = x
        console.log("X inserido com sucesso")
    }

    set filly(y: number) {
        if (y === 0) {
            return
        }

        this.y = y
        console.log("Y inserido com sucesso")
    }

    get getCoords() {
        return `x: ${this.x} e y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillx = 15
myCoords.filly = 0
myCoords.filly = 10

console.log(myCoords.getCoords)

// 09 - IMPLEMENTS

interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle{
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O titulo do post é ${this.title}`
    }
}

const myPost = new blogPost("Hello World")
console.log(myPost.itemTitle())

class TestingInterface implements showTitle{
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O titulo é: ${this.title}`
    }
}

const newPost = new TestingInterface("Hello World")
console.log(newPost.itemTitle())

// 10 - OVERRIDING METHODS

class Base {
    someMethod() {
        console.log("Metodo someMethod")
    }
}

class Nova extends Base{
    someMethod() {
        console.log("Override do metodo someMethod")
    }
}

const myObject = new Nova()
myObject.someMethod()

// 11 - PUBLIC

class D {
    x = 10
}

const dInstance = new D()
console.log(dInstance.x)

// 12 - PROTECTED

class E {
    protected x = 15

    protected protectedMethod() {
        console.log("Este método é protegido")
    }
}

class F extends E {

    showX() {
        console.log("X: " + this.x)
    }

    showProtectedMethod() {
        this.protectedMethod()
    }
}

const fInstance = new F()
fInstance.showX()

fInstance.showProtectedMethod()

// 13 - PRIVATE

class PrivateClass {
    private name = "Private"

    showName() {
        return this.name
    }

    private privateMethod() {
        console.log("Método Privado")
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}

const pObj = new PrivateClass()
console.log(pObj.showName())
pObj.showPrivateMethod()


// 14 - STATIC MEMBERS

class StaticMembers {
    static prop = "Teste Static"

    static staticMethod() {
        console.log("Este é um método estático")
    }
}

console.log(StaticMembers.prop)
StaticMembers.staticMethod()

// 15 - GENERIC CLASS

class Item<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é: ${this.first}`
    }
}

const newItem = new Item("caixa", "surpresa")
console.log(newItem.showFirst)
console.log(typeof (newItem.first))

const secondItem = new Item(12, true)
console.log(secondItem.showFirst)
console.log(typeof (secondItem.first))

// 16 -  PARAMETER PROPERTIES

class ParameterProperts {
    constructor(
        public name: string,
        private qty: number,
        private price: number
    ) {
        this.name = name
        this.qty = qty
        this.price= price
    }

    get showQty() {
        return `Qtd total: ${this.qty}`
    }

    get showPrice() {
        return `Valor total: ${this.price}`
    }
}

const product1 = new ParameterProperts("Camisa", 5, 19.99)

console.log(product1.name)
console.log(product1.showQty)
console.log(product1.showPrice)

// 17 - CLASS EXPRESSIONS

const myClass = class <T>{
    name;

    constructor(name: T) {
        this.name = name
    }
}

const pessoa1 = new myClass("Jones")
console.log(pessoa1)
console.log(pessoa1.name)

// 18 - ABSTRACT CLASS

abstract class AbstractClass {
    abstract showNumber(): void
}

class AbstractExample extends AbstractClass{
    number: number
    constructor(number: number) {
        super()
        this.number = number
    }

    showNumber() {
        console.log(`O número é: ${this.number}`)
    }
}

const newAbstractNumber = new AbstractExample(90)
newAbstractNumber.showNumber()

// 19 - RELATIONSHIPS BETWEEN CLASSES

class Dogs {
    name!: string
}

class Cats {
    name!: string
}

const dog: Dogs = new Cats()
console.log(dog)