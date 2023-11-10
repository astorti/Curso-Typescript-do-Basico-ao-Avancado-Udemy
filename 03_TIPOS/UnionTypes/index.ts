function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}
showBalance(300)
showBalance('600')

console.log("=================")
const arr: Array<number | string | boolean> = [1, "teste", true]
console.log(arr)

console.log("=================")
function showUserRole(role: boolean | string) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado!'
    }
    return `O usuário é um: ${role}`
}
console.log(showUserRole(false))
console.log(showUserRole('Admin'))
console.log(showUserRole('Editor'))