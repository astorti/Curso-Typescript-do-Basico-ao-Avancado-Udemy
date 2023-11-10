function showNumbers(a: number, b: number, c?: number) {
    console.log('A: ' + a)
    console.log('B: ' + b)
    if (c !== undefined) {
        console.log('C: ' + c) 
    }
}

showNumbers(1, 2, 3)
showNumbers(4, 3)


function advancedGreeting(firstName: string, idade?: number) {
    if (idade !== undefined) {
    return console.log(`Olá, ${firstName}, ${idade} anos`)
    }

    return console.log(`Olá, ${firstName}`)
}

advancedGreeting('João', 39)
advancedGreeting('João')