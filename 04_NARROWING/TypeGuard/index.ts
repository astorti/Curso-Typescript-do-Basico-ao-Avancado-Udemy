function soma(a: number | string, b: number | string) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b)
    } else {
        console.log('Impossível realizar a soma!')
    }
}

soma("4", "59")
soma(12, 42.3)
soma("5", 6)
