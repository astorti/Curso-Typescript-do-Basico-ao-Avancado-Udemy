function saudacao(name: string): string {
    return `Olá ${name}`
} 

function preSaudacao(f: (name: string) => string, userName: string) {
    console.log("Preparando a função")

    const greet = f(userName)
    console.log(greet)
}

preSaudacao(saudacao, "André")