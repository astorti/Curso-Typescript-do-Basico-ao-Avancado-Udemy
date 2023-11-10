function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(300);
showBalance('600');
console.log("=================");
var arr = [1, "teste", true];
console.log(arr);
console.log("=================");
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado!';
    }
    return "O usu\u00E1rio \u00E9 um: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
console.log(showUserRole('Editor'));
