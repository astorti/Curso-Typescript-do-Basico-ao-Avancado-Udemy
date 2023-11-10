class UserName {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUserName extends UserName {
    constructor(name: string) {
        super(name)
    }
}

const john = new UserName('John')
const paul = new SuperUserName('Paul')

console.log(john)
console.log(paul)

function userGreeting(user: object) {
    if (user instanceof SuperUserName) {
        console.log(`Olá ${user.name}, deseja ver os dados?`)
    } else if (user instanceof UserName) {
        console.log(`Olá ${user.name}!`)
    }
}

userGreeting(john)
userGreeting(paul)