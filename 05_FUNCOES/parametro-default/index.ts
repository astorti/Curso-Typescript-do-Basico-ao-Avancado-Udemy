function somaDefault(n: number, m = 10): number {
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(10, 12))