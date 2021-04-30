 /* 1. chiedi all'utente il cognome */
var cognomeUtente = prompt("Inserisci il tuo cognome");
console.log(cognomeUtente);

/* 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli' */
var listaCognomi = ["Rossi", "Bianchi", "Neri", "Gialli", "Verdi"];
console.log(listaCognomi);
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

/* 3. stampa la lista ordinata alfabeticamente */
listaCognomi.sort ();
console.log(listaCognomi);
/* 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */
for (i = 1; i < listaCognomi.length +1; i++) {
    console.log(listaCognomi.indexOf(cognomeUtente));
};
