var message1 = "Péssimo";
var message2 = "Ruim";
var message3 = "Bom";
var message4 = "Ótimo";
var message5 = "Excelente";
var message6 = "Sem avaliação";
function review(value) {
    if (value === 1) {
        return message1;
    }
    else if (value === 2) {
        return message2;
    }
    else if (value === 3) {
        return message3;
    }
    else if (value === 4) {
        return message4;
    }
    else if (value === 5) {
        return message5;
    }
    else if (!value) {
        value = false;
    }
    if (value === false) {
        return message6;
    }
}
console.log(review(1));
console.log(review(2));
console.log(review(3));
console.log(review(4));
console.log(review(5));
console.log(review());
console.log(review(false));
