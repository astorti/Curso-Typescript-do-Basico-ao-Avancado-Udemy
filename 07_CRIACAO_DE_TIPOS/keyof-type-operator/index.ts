type Character = { name: string, age: number, hasDriveLicence: boolean }

type C = keyof Character

function showCharName(obj: Character, key: C): string{
    return `${obj[key]}`
}

const myChar: Character = {
    name: "Andrew",
    age: 40,
    hasDriveLicence: true
}

console.log(showCharName(myChar, "name"))
console.log(showCharName(myChar, "age"))
console.log(showCharName(myChar, "hasDriveLicence"))