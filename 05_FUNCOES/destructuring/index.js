function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto \u00E9 ".concat(name, " e ele custa R$").concat(price);
}
var shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
