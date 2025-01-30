test("3.5 euro deberia ser 3.745 Dollares", () => {

    const { fromEuroToDollar } = require ('./app.js');
   
    expect(fromEuroToDollar(3.5)).toBe(3.745);

});

const { sum } = require('./app.js');

test('la suma de 14 + 9 es igual a 23', () => {
    
    let total = sum(14, 9);

    expect(total).toBe(23);

});

test("2 dolares deberian ser 312.78 yenes", () => {

    const { fromDollarToYen } = require('./app.js');
    
    expect(fromDollarToYen(2)).toBe(312.78);

});

test("3 yen deberia ser 0.0156 pound", () => {

    const {fromYenToPound } = require ('./app.js');

    expect(fromYenToPound(3)).toBe(0.0156);

});