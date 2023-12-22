// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e quanti vorrà visualizzarne
const nElementi = parseInt(prompt("Quanti numeri casuali vuoi che io generi?"));
const aElementi = [];
const vElementi = parseInt(prompt("Quanti numeri casuali di quelli generati vuoi che ti mostri?"));

// validation
if (isNaN(nElementi) || isNaN(vElementi)) {
    alert("Inserisci valori numerici!");
} else if (nElementi <= 0 || vElementi <= 0) {
    alert("I numeri inseriti devono essere superiori a 0!");
} else if (nElementi < vElementi) {
    alert("I numeri da visualizzare non possono essere più di quelli generati!")
    } else {
        
        // generiamo tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire
        for (let i = 0; i < nElementi; i++) {
            aElementi[i] = Math.floor(Math.random()*100)+1;
        };
        console.log("I numeri casuali generati sono i seguenti: " + aElementi);
        
        // pushamo nell'array
        let lastElements = [];
        for (let i = aElementi.length-vElementi; i <= aElementi.length; i+=1) {
            lastElements.push(aElementi[i]);
        }
        
        // Stampiamo gli elementi dell'Array
        console.table(`Gli ultimi ${vElementi} numeri casuali generati sono: ${lastElements}`);

};

