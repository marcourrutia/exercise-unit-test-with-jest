// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen (dollar){
    const euro = dollar / 1.07;
    return euro * 156.5;
}

const fromYenToPound = (yen) => {
    const euro = yen / 156.5;
    return euro * 0.87;
}
const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };