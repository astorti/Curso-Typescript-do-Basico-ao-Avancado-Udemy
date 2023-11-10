type ID = number | string

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")

type User = {
    name: string
    age: number
}

function userDetails(user: User) {
    console.log(`Nome: ${user.name}`)
    console.log(`Idade: ${user.age}`)
}

userDetails({ name: 'Thor', age: 39 })