/*
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
    Bonus: L’inserimento avviene tramite un campo input
*/

const sceltaUtente = prompt("Scegli pari o dispari");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

function getRandom (max){
    return Math.ceil(Math.random() * max);
}

let sommaNumeri = numeroUtente + getRandom(5);

console.log("questa è la tua somma", sommaNumeri);

let odd = false;

function isOdd (num){
    if(num % 2) odd = false;
    odd = true;
}

isOdd(sommaNumeri);

if(sceltaUtente === "pari" && odd === true){
    console.log("L'utente ha vinto!");
}else if(sceltaUtente === "dispari" && odd === false){
    console.log("L'utente ha vinto!");
}else{
    console.log("L'utente ha perso :(");
}
