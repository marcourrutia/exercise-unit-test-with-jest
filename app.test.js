const { sum, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 Yen", function() {
    const dollar = fromDollarToYen(1);
    expect(dollar).toBe(146.26);
})

test("Parametro es un String", function() {
    const dollar = fromDollarToYen("Holaaa");
    expect(dollar).toBe(NaN);
})

test("Un Yen debe ser 0.00333 pound", function() {
    const yen = fromYenToPound(6);
    expect(yen).toBe(0.03335)        
})