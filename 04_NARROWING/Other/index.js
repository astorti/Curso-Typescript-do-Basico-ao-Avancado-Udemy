function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            var sum = arr.reduce(function (i, total) { return i + total; });
            console.log(sum);
        }
        else if (operation === 'multiply') {
            var multiply = arr.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
    }
    else {
        console.log('Por favor, defina uma operação!');
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], 'sum');
operations([2, 4, 8], 'multiply');
