var newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log("O ve\u00EDculo tem a km de ".concat(km));
}
showKm(newTruck.km);
var newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
