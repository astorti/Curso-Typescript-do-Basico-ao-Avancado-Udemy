// 01 - CAMPOS EM CLASSE
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
var george = new Users();
console.log(george);
george.name = "George";
george.age = 58;
// 02 - CONSTRUCTOR
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var joao = new NewUser("João", 22);
console.log(joao);
// 03 - CAMPO READONLY
var newCars = /** @class */ (function () {
    function newCars(name) {
        this.wheels = 4;
        this.name = name;
    }
    return newCars;
}());
var carro1 = new newCars("Fusca");
console.log(carro1);
console.log(carro1.wheels);
carro1.name = "Fusca Turbo";
console.log(carro1.name);
// 04 - HERANÇA E SUPER
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var trator = new Machine("Trator");
console.log(trator);
var Airplaine = /** @class */ (function (_super) {
    __extends(Airplaine, _super);
    function Airplaine(name, passengers) {
        var _this = _super.call(this, name) || this;
        _this.passengers = passengers;
        return _this;
    }
    return Airplaine;
}(Machine));
var airplaine1 = new Airplaine("Boing 747", 410);
console.log(airplaine1);
// 05 - MÉTODOS
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    People.prototype.greeting = function () {
        console.log("Hey Stranger!");
    };
    return People;
}());
var jimmy = new People("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
// 06 - THIS
var Trucks = /** @class */ (function () {
    function Trucks(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Trucks.prototype.showDetails = function () {
        console.log("Caminh\u00E3o do modelo: ".concat(this.model, ", que tem ").concat(this.hp, " cavalos de pot\u00EAncia."));
    };
    return Trucks;
}());
var truck1 = new Trucks("Volvo", 400);
var truck2 = new Trucks("Scania", 500);
truck1.showDetails();
truck2.showDetails();
// 07 - GETTERS
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.name + " " + this.surname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var isaacAsimov = new Person("Isaac", "Asimov");
console.log(isaacAsimov.name);
console.log(isaacAsimov.fullName);
// 08 - SETTERS
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillx", {
        set: function (x) {
            if (x === 0) {
                return;
            }
            this.x = x;
            console.log("X inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "filly", {
        set: function (y) {
            if (y === 0) {
                return;
            }
            this.y = y;
            console.log("Y inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoords", {
        get: function () {
            return "x: ".concat(this.x, " e y: ").concat(this.y);
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 0;
myCoords.filly = 10;
console.log(myCoords.getCoords);
var blogPost = /** @class */ (function () {
    function blogPost(title) {
        this.title = title;
    }
    blogPost.prototype.itemTitle = function () {
        return "O titulo do post \u00E9 ".concat(this.title);
    };
    return blogPost;
}());
var myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
var TestingInterface = /** @class */ (function () {
    function TestingInterface(title) {
        this.title = title;
    }
    TestingInterface.prototype.itemTitle = function () {
        return "O titulo \u00E9: ".concat(this.title);
    };
    return TestingInterface;
}());
var newPost = new TestingInterface("Hello World");
console.log(newPost.itemTitle());
// 10 - OVERRIDE DE MÉTODOS
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log("Metodo someMethod");
    };
    return Base;
}());
var Nova = /** @class */ (function (_super) {
    __extends(Nova, _super);
    function Nova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nova.prototype.someMethod = function () {
        console.log("Override do metodo someMethod");
    };
    return Nova;
}(Base));
var myObject = new Nova();
myObject.someMethod();
// 11 - PUBLIC
var D = /** @class */ (function () {
    function D() {
        this.x = 10;
    }
    return D;
}());
var dInstance = new D();
console.log(dInstance.x);
// 12 - PROTECTED
var E = /** @class */ (function () {
    function E() {
        this.x = 15;
    }
    E.prototype.protectedMethod = function () {
        console.log("Este método é protegido");
    };
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log("X: " + this.x);
    };
    F.prototype.showProtectedMethod = function () {
        this.protectedMethod();
    };
    return F;
}(E));
var fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - PRIVATE
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
        this.name = "Private";
    }
    PrivateClass.prototype.showName = function () {
        return this.name;
    };
    PrivateClass.prototype.privateMethod = function () {
        console.log("Método Privado");
    };
    PrivateClass.prototype.showPrivateMethod = function () {
        this.privateMethod();
    };
    return PrivateClass;
}());
var pObj = new PrivateClass();
console.log(pObj.showName());
pObj.showPrivateMethod();
// 14 - STATIC MEMBERS
var StaticMembers = /** @class */ (function () {
    function StaticMembers() {
    }
    StaticMembers.staticMethod = function () {
        console.log("Este é um método estático");
    };
    StaticMembers.prop = "Teste Static";
    return StaticMembers;
}());
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - GENERIC CLASS
var Item = /** @class */ (function () {
    function Item(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Item.prototype, "showFirst", {
        get: function () {
            return "O first \u00E9: ".concat(this.first);
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var newItem = new Item("caixa", "surpresa");
console.log(newItem.showFirst);
console.log(typeof (newItem.first));
var secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof (secondItem.first));
// 16 -  PARAMETER PROPERTIES
var ParameterProperts = /** @class */ (function () {
    function ParameterProperts(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    Object.defineProperty(ParameterProperts.prototype, "showQty", {
        get: function () {
            return "Qtd total: ".concat(this.qty);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterProperts.prototype, "showPrice", {
        get: function () {
            return "Valor total: ".concat(this.price);
        },
        enumerable: false,
        configurable: true
    });
    return ParameterProperts;
}());
var product1 = new ParameterProperts("Camisa", 5, 19.99);
console.log(product1.name);
console.log(product1.showQty);
console.log(product1.showPrice);
// 17 - CLASS EXPRESSIONS
var myClass = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var pessoa1 = new myClass("Jones");
console.log(pessoa1);
console.log(pessoa1.name);
// 18 - ABSTRACT CLASS
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
var AbstractExample = /** @class */ (function (_super) {
    __extends(AbstractExample, _super);
    function AbstractExample(number) {
        var _this = _super.call(this) || this;
        _this.number = number;
        return _this;
    }
    AbstractExample.prototype.showNumber = function () {
        console.log("O n\u00FAmero \u00E9: ".concat(this.number));
    };
    return AbstractExample;
}(AbstractClass));
var newAbstractNumber = new AbstractExample(90);
newAbstractNumber.showNumber();
