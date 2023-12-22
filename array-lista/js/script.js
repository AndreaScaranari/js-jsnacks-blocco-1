// frigorifero pieno di frutta
const frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

// mettere la pesca in frigorifero
frigorifero.push("pesca");
console.table(frigorifero);

// possibili esiti ricerca ingrediente cocktail
const cielo = "Trovato! Devo solo preparare il cocktail.";
const manca = "Oh no, devo uscire a comprare il cocomero!"
const isCocomero = "cocomero";
let esito = manca;

for (let i = 0; i < frigorifero.length; i++) {
    if (frigorifero[i] === isCocomero) {
        esito = cielo;
    }
}

console.log(esito);