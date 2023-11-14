var myNumberArray = [1, 2, 3, 4, 5];
var anotherUser = ['George', 30];
console.log(anotherUser[0]);
anotherUser[0] = 'Paul';
console.log(anotherUser[0]);
console.log(anotherUser);
console.log("==================");
console.log("tuplas com readonly");
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([3, 6]);
