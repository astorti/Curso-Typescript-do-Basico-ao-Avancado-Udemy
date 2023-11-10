function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId("200");
function userDetails(user) {
    console.log("Nome: ".concat(user.name));
    console.log("Idade: ".concat(user.age));
}
userDetails({ name: 'Thor', age: 39 });
