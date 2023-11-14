function doSomething(d: unknown) {
    if (Array.isArray(d)) {
        console.log(d[0])
    } else if (typeof d === "number") {
        console.log("d é um número")
    }
}

doSomething([1, 2, 3])
doSomething(5)