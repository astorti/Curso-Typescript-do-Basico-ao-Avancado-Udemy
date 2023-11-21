function showCharName(obj, key) {
    return "".concat(obj[key]);
}
var myChar = {
    name: "Andrew",
    age: 40,
    hasDriveLicence: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "hasDriveLicence"));
