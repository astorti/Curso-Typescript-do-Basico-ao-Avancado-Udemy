function passCoordinates(coord: { x: number; y: number }) {
    console.log('X coordinates: ' + coord.x)
    console.log('Y coordinates: ' + coord.y)
}
const objCoord = { x: 355, y: 432.5 }
passCoordinates(objCoord)

const pessoaObj: { nome: string, idade: number } = {
    nome: "João",
    idade: 40 
}
console.log(pessoaObj)