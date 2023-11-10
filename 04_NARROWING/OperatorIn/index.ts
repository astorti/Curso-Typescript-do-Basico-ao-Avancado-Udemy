class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        if (breed) {
            this.breed = breed
        }
    }
}

const wolf = new Dog('Wolf')
const bob = new Dog('Bob', 'Pastor Alemão')

function showDogDetails(dog: Dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça: ${dog.breed}`)
    } else {
        console.log('O cachorro não tem uma raça definida!')
    }
}

showDogDetails(wolf)
showDogDetails(bob)