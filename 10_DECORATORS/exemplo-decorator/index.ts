console.log("EXEMPLO DECORATOR")
function myDecorator() {

    console.log("Iniciando decorator!")

    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator");
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    };
}


class MyClass {

    @myDecorator()
    testing() {
        console.log("Terminando execução do método")
    }
}

const myObj2 = new MyClass()

myObj2.testing()
