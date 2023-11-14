function firstElement<T>(arr2: T[]): T {
    return arr2[0]
}

console.log(firstElement([1, 2, 3, 4]))
console.log(firstElement(["a", "b", "c", "d"]))

console.log("===========================")

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2    
    }
}

const newObject = mergeObjects({ name: "Paul" }, { age: 30, job: "Programmer" })
console.log(newObject)

console.log("==================")
console.log("Especificar tipo de argumentos")

function mergeArrays<T>(arr3: T[], arr4: T[]) {
    return arr3.concat(arr4)
}

console.log(mergeArrays([1, 2, 3], [4, 5]))
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]))