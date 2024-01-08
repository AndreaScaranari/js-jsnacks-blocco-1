// ### Es3. Bonus Snack
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// const aLetters = ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8", "i9", "l10"];
// const aNumbers = [1, 2, 3, 4, 5];

// console.log(aLetters);
// console.log(aNumbers);

// for (let i = aNumbers.length+1; i <= aLetters.length; i++) {
//     aNumbers.push(i);
// };

// console.log(aNumbers);


// ! Live coding con For
// let shorterArray;
// let longerArray;

// if (aLetters.length > aNumbers.length) {
//     shorterArray = aNumbers;
//     longerArray = aLetters;
// } else (aLetters.length < aNumbers.length) {
//     shorterArray = aLetters;
//     longerArray = aNumbers;
// }

// const difference = longerArray.length - shorterArray.length;

// for ( let i = 0; i < difference; i++) {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     shorterArray.push(randomNumber);
// }

// console.log(shorterArray, longerArray);

// ! Live coding con While
// const array1 = [5, 7];
// const array2 = [3, 54, 6, 3, 23];

// const shorterArray = array1.length < array2.length ? array1 : array2;

// while (array1.length !== array2.length) {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     shorterArray.push(randomNumber);
// }

// console.log(shorterArray);


// ! Live coding cognomi con While
/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati (con nomi diversi).*/

const firstNames = ['Diego', 'Danilo', 'Francesco', 'Arianna', 'Santiago'];
const lastNames = ['Scaranari', 'Verderame','Marzi', 'Maffucci', 'Cantafio'];

const guests = [];

while (guests.length < 3) {
    const randomFirstName = firstNames[Math.floor(Math.random()*firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random()*lastNames.length)];
    const fakeGuest = `${randomFirstName} ${randomLastName}`;
    if (!guests.includes(fakeGuest)) {
        guests.push(fakeGuest);
    }
}

console.log(guests);