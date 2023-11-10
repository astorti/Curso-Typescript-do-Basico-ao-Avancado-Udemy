function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    if (c !== undefined) {
        console.log('C: ' + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 3);
function advancedGreeting(firstName, idade) {
    if (idade !== undefined) {
        return console.log("Ol\u00E1, ".concat(firstName, ", ").concat(idade, " anos"));
    }
    return console.log("Ol\u00E1, ".concat(firstName));
}
advancedGreeting('João', 39);
advancedGreeting('João');
