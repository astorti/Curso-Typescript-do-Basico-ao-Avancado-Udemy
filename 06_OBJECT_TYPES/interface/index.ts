interface Product {
    name: string
    price: number
    isAvaliable: boolean
}

function productDetail(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if (product.isAvaliable) {
        console.log("O produto está disponível")
    } else {
        console.log("O produto não está disponível.")
    }
}

const tenis: Product = {
    name: "Tenis",
    price: 199.99,
    isAvaliable: true
}

productDetail(tenis)
productDetail({name: "Camiseta", price: 59.99, isAvaliable: false})


console.log("========================")
console.log("Propriedade opcional com interface")

interface newUser{
    name: string,
    age?: number
}

function showUserDetail(user: newUser) {
    console.log(`O nome do usuário é: ${user.name}`)
    if (user.age) {
        console.log(`${user.name} tem ${user.age} anos`)
    }
}

const u1: newUser = { name: "Sebastian", age: 52 }
const u2: newUser = { name: "Pietro" }

showUserDetail(u1)
showUserDetail(u2)