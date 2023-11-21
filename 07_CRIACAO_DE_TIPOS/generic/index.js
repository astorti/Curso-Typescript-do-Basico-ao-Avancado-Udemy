function showData(arg) {
    return "O dado \u00E9 ".concat(arg);
}
console.log(showData(5));
console.log(showData("Testando generic"));
console.log(showData(true));
console.log(showData([]));
console.log(showData(["teste"]));
console.log("======================");
console.log("Constaints em generic");
function showProductName(obj) {
    return "O nome do produto \u00E9 ".concat(obj.name);
}
var myObj = { name: "Porta", cor: "Branca" };
var otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
console.log("======================");
console.log("Interfaces com generic");
var myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
var myPen = { name: "Caneta Bic", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
console.log("======================");
console.log("Type Parameters");
function getSomeKey(obj, key) {
    return "A chave ".concat(key.toString(), " est\u00E1 presente no objeto e tem valor ").concat(obj[key], " ");
}
var server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
