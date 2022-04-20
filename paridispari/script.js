/*
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
    Bonus: L’inserimento avviene tramite un campo input
*/

// Dichiaro le due variabili che devo chiedere all'utente.
let sceltaUtente;
let numeroUtente;

// Dichiaro la Booleana che mi serve per il primo controllo.
let scrittoBene = false;

// Controllo se pari e dispari sono scritti bene.
while(!scrittoBene){
    sceltaUtente = prompt("Scegli pari o dispari").trim();
    if(sceltaUtente === "pari" || sceltaUtente === "dispari"){
        scrittoBene = true;
    }
}

// Controllo che l'utente abbia inserito un numero scritto in cifre da 1 a 5.
while(isNaN(numeroUtente)){
   numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}
while(numeroUtente<1 || numeroUtente>5){
   numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

// Dichiaro la funzione per ottenere un numero casuale.
function getRandom (max){
    return Math.ceil(Math.random() * max);
}

// Sommo i numeri disponibili.
let sommaNumeri = numeroUtente + getRandom(5);
console.log("questa è la tua somma", sommaNumeri);

// Dichiaro la variabile Booleana per la funzione Pari o Dispari.
let odd = false;

// Dichiaro la funzione pari o dispari.
function isOdd (num){
    if(num % 2) odd = false;
    odd = true;
}

// Invoco la funzione pari o dispari sulla somma precedente.
isOdd(sommaNumeri);

// Stampo in pagina il vincitore.
let output = document.querySelector("h1")

if(sceltaUtente === "pari" && odd === true){
    output.innerHTML = `La somma è: ${sommaNumeri}. L'utente ha scelto ${sceltaUtente} e quindi l'utente ha vinto!`;
}else if(sceltaUtente === "dispari" && odd === false){
    output.innerHTML = `La somma è: ${sommaNumeri}. L'utente ha scelto ${sceltaUtente} e quindi l'utente ha vinto!`;
}else{
    output.innerHTML = `La somma è: ${sommaNumeri}. L'utente ha scelto ${sceltaUtente} e quindi l'utente ha perso!`;
}