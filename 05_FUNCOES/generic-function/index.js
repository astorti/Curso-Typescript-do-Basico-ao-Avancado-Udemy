var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function firstElement(arr2) {
    return arr2[0];
}
console.log(firstElement([1, 2, 3, 4]));
console.log(firstElement(["a", "b", "c", "d"]));
console.log("===========================");
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "Paul" }, { age: 30, job: "Programmer" });
console.log(newObject);
console.log("==================");
console.log("Especificar tipo de argumentos");
function mergeArrays(arr3, arr4) {
    return arr3.concat(arr4);
}
console.log(mergeArrays([1, 2, 3], [4, 5]));
console.log(mergeArrays([1, 2, 3], ["teste", "testando"]));
