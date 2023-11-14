function productDetail(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 R$").concat(product.price));
    if (product.isAvaliable) {
        console.log("O produto está disponível");
    }
    else {
        console.log("O produto não está disponível.");
    }
}
var tenis = {
    name: "Tenis",
    price: 199.99,
    isAvaliable: true
};
productDetail(tenis);
productDetail({ name: "Camiseta", price: 59.99, isAvaliable: false });
console.log("========================");
console.log("Propriedade opcional com interface");
function showUserDetail(user) {
    console.log("O nome do usu\u00E1rio \u00E9: ".concat(user.name));
    if (user.age) {
        console.log("".concat(user.name, " tem ").concat(user.age, " anos"));
    }
}
var u1 = { name: "Sebastian", age: 52 };
var u2 = { name: "Pietro" };
showUserDetail(u1);
showUserDetail(u2);
