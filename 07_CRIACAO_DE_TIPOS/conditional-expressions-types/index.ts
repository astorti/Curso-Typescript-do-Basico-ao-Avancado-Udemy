interface A { }
interface B extends A { }

type myType = B extends A ? number : string
const someVar: myType = 5