// frigorifero pieno di frutta
const frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

// mettere la pesca in frigorifero
frigorifero.push("pesca");
console.table(frigorifero);

// possibili esiti ricerca ingrediente cocktail
const isCocomero = "cocomero";
let esitoRicerca = false;

for (let i = 0; i < frigorifero.length && !esitoRicerca; i++) {
    if (frigorifero[i] === isCocomero) {
        esitoRicerca = true;
    }
}

const message = esitoRicerca 
? "Trovato! Devo solo preparare il cocktail."
: "Oh no, devo uscire a comprare il cocomero!"

console.log(message);