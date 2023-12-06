
console.log("CLASS DECORATOR")
function classDec(constructor: Function) {
    console.log(constructor.name)
    if(constructor.name === "UserIdentity") {
        console.log("Criando usuário!")
    }
}

@classDec
class UserIdentity {
    name

    constructor(name: string) {
        this.name = name
    }
}

const patrick = new UserIdentity("Patrick")
console.log(patrick)
