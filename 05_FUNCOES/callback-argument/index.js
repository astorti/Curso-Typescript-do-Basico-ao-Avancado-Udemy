function saudacao(name) {
    return "Ol\u00E1 ".concat(name);
}
function preSaudacao(f, userName) {
    console.log("Preparando a função");
    var greet = f(userName);
    console.log(greet);
}
preSaudacao(saudacao, "André");
