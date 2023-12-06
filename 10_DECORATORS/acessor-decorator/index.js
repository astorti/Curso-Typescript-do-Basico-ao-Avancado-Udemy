var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
console.log("ACESSOR DECORATOR");
function enumerable2(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var Monster = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _get_showName_decorators;
    var _get_showAge_decorators;
    return _a = /** @class */ (function () {
            function Monster(name, age) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.name = name;
                this.age = age;
            }
            Object.defineProperty(Monster.prototype, "showName", {
                get: function () {
                    return "Nome do monstro: ".concat(this.name);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "showAge", {
                get: function () {
                    return "Idade do monstro: ".concat(this.age);
                },
                enumerable: false,
                configurable: true
            });
            return Monster;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _get_showName_decorators = [enumerable2(true)];
            _get_showAge_decorators = [enumerable2(false)];
            __esDecorate(_a, null, _get_showName_decorators, { kind: "getter", name: "showName", static: false, private: false, access: { has: function (obj) { return "showName" in obj; }, get: function (obj) { return obj.showName; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _get_showAge_decorators, { kind: "getter", name: "showAge", static: false, private: false, access: { has: function (obj) { return "showAge" in obj; }, get: function (obj) { return obj.showAge; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var charmander = new Monster("Charmander", 10);
console.log(charmander);
