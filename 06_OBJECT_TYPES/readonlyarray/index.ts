let myArray: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Banana']

myArray.forEach((item) => {
    console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)
