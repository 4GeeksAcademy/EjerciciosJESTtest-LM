const fromEuroToDollar = function(valueInEuro) {
   
    let valueInDollar = valueInEuro * 1.07;
   
    return valueInDollar
}

const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = function(valueInDollar) {

    let valueInYen = valueInDollar * 156.39;

    return valueInYen
}

const fromYenToPound = function(valueInYen) {

    let valueInPound = valueInYen * 0.0052;
    
    return valueInPound
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }