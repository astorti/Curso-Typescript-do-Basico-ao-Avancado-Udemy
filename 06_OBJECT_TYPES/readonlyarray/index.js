var myArray = ['Maçã', 'Laranja', 'Banana'];
myArray.forEach(function (item) {
    console.log('Fruta: ' + item);
});
myArray = myArray.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArray);
