var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var wolf = new Dog('Wolf');
var bob = new Dog('Bob', 'Pastor Alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("O cachorro \u00E9 da ra\u00E7a: ".concat(dog.breed));
    }
    else {
        console.log('O cachorro não tem uma raça definida!');
    }
}
showDogDetails(wolf);
showDogDetails(bob);
