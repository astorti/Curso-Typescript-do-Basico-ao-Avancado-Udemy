console.log("MULTIPLOS DECORATORS")
function b() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou b")
    };
}

function c() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou c")
    };
}

class MultipleClass {

    @b()
    @c()
    testing() {
        console.log("Terminando execução do método")
    }
}

const multiple = new MultipleClass()

multiple.testing()

