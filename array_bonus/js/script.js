// ### Es3. Bonus Snack
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const aLetters = ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8", "i9", "l10"];
const aNumbers = [1, 2, 3, 4, 5];

console.table(aLetters);
console.table(aNumbers);

for (let i = aNumbers.length+1; i <= aLetters.length; i++) {
    aNumbers.push(i);
};

console.table(aNumbers);
