"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - importação de arquivos
console.log("1 - importação de arquivos");
var greet_js_1 = require("./greet.js");
(0, greet_js_1.default)();
console.log();
console.log("============");
// 2 - import de variavel
console.log("2 - import de variavel");
var variable_js_1 = require("./variable.js");
console.log(variable_js_1.x);
console.log();
console.log("============");
// 3 - multiplas exportacoes
console.log("3 - multiplas exportações");
var multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
console.log();
console.log("============");
// 4 - alias
console.log("4 - alias");
var changename_js_1 = require("./changename.js");
console.log(changename_js_1.someName);
console.log();
console.log("============");
// 5 - import all
console.log("5 - import all");
var myNumbers = require("./numbers.js");
console.log(myNumbers);
var n = myNumbers.n1;
console.log(n);
myNumbers.showNumber();
console.log();
console.log("============");
// 6 - importando tipos
console.log("6 - importando tipos");
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var joao = new User("João", 25);
console.log(joao);
