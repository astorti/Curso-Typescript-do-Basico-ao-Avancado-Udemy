type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]

type nameAndAge = [string, number]

const anotherUser = ['George', 30]
console.log(anotherUser[0])

anotherUser[0] = 'Paul'
console.log(anotherUser[0])

console.log(anotherUser)

console.log("==================")
console.log("tuplas com readonly")

function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([3, 6])
