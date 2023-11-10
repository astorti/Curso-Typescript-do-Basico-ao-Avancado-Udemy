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
var UserName = /** @class */ (function () {
    function UserName(name) {
        this.name = name;
    }
    return UserName;
}());
var SuperUserName = /** @class */ (function (_super) {
    __extends(SuperUserName, _super);
    function SuperUserName(name) {
        return _super.call(this, name) || this;
    }
    return SuperUserName;
}(UserName));
var john = new UserName('John');
var paul = new SuperUserName('Paul');
console.log(john);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUserName) {
        console.log("Ol\u00E1 ".concat(user.name, ", deseja ver os dados?"));
    }
    else if (user instanceof UserName) {
        console.log("Ol\u00E1 ".concat(user.name, "!"));
    }
}
userGreeting(john);
userGreeting(paul);
