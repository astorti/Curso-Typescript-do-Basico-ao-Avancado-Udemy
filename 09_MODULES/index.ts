// 1 - importação de arquivos
console.log("1 - importação de arquivos")
import importGreet from './greet.js'

importGreet()
console.log()
console.log("============")

// 2 - import de variavel
console.log("2 - import de variavel")
import {x} from './variable.js'

console.log(x)

console.log()
console.log("============")

// 3 - multiplas exportacoes
console.log("3 - multiplas exportações")
import {a, b, myFunction} from './multiple'

console.log(a)
console.log(b)

myFunction()

console.log()
console.log("============")

// 4 - alias
console.log("4 - alias")
import {someName as name} from './changename.js'

console.log(name)

console.log()
console.log("============")

// 5 - import all
console.log("5 - import all")
import * as myNumbers from './numbers.js'

console.log(myNumbers)

const n = myNumbers.n1
console.log(n)

myNumbers.showNumber()

console.log()
console.log("============")

// 6 - importando tipos
console.log("6 - importando tipos")
import {Human} from './mytype'

class User implements Human {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    } 
}

const joao = new User("João", 25)

console.log(joao)
