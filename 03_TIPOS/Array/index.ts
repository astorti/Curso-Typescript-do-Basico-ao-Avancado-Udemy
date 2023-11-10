console.log("Array numérica")
let numbers: number[] = [1, 2, 3]
numbers.push(5)
console.log(numbers[2])

console.log("=====================")
console.log("Array string")
const nomes: string[] = ['Matheus', 'André']
console.log(typeof(nomes), nomes)


console.log("=====================")
console.log("outra sintaxe de array")
const nums: Array<number> = [100]

nums.push(200)
console.log(nums[1])