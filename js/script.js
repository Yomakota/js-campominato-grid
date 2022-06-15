// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili.In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

//------------
// Comments
//------------
// 1) Chiedo numero a utente per scegliere livello difficoltà con un prompt
// 2) Range di numeri con cui giocare:
    // se difficoltà 1 numeri range saranno tra 1 e 100;
    // se difficoltà 2 numeri range saranno tra 1 e 81;
    // se difficoltà 3 numeri range saranno tra 1 e 49;
// 3) Creo 16 numeri casuali (bombe)
// 4) Numero tentativi [numero max range - bombe(16)]

//------------
// Logica
//------------
//  Chiedere numero utente con prompt finchè:
//  1) il numero inserito è una bomba (gioco finito, messaggio 'hai perso' e punteggio);
//  Altrimenti:
//  2) l'utente raggiunge numero massimo di tentativi (array con numeri tentativi utenti = numero max tentativi ) e gioco finito con messaggio 'Hai vinto'


// Chiedo numero a utente per scegliere livello difficoltà con un prompt
let gameLevel = parseInt(prompt('Scegli difficoltà 1-2-3'));
while (gameLevel < 1 || gameLevel > 3){
    gameLevel = parseInt(prompt('Scegli difficoltà 1-2-3'));
}
console.log(gameLevel);

let gameRangeNum;

// Livello di difficoltà cambia range di numeri con cui giocare:
switch (gameLevel) {
    case 1:
        gameRangeNum = 100;
    break;
    case 2:
        gameRangeNum = 81;
    break;
    case 3:
        gameRangeNum = 49;
    break;
}

console.log(gameRangeNum);

const bombsNum = 16;
const minRange = 1;
const bombs = generateBomb(bombsNum, minRange, gameRangeNum);
console.log(bombs);

const numAttempts = gameRangeNum - bombsNum;
console.log(numAttempts);

const userAttempts = [];

let winner;
let lost = false;

//---------
//GAME
//---------

// per terminare gioco uso una flag var che sarà true
let continueGame = true;

// finche è vera chiedo il numero all'utente
let userNum = parseInt(prompt(`'inserisci un numero tra 1 e ${gameRangeNum}'`));
while (continueGame) {
    
    // controllo se utente da un numero che rientra nel range
    if(
        isNaN(userNum) 
        || userNum < minRange 
        || userNum > gameRangeNum
    ) {
        userNum = parseInt(prompt(`Numero Invalido inserisci un numero tra 1 e ${gameRangeNum}`));
    }

// se trova la bomba cambia in false e si ferma il gioco con 'hai perso' e il punteggio
    if (bombs.includes(userNum)) {
        continueGame = false;
        winOrLost(lost, userAttempts);

// altrimenti i numeri usati dall'utente li salvo in un array
    } else {
        // se non già inclusi e non maggiori dei numeri del range
        if (!userAttempts.includes(userNum) && !userNum > gameRangeNum) {
            userAttempts.push(userNum);
        }
        console.log(userAttempts);

//se l'array dei numeri usati dall'utente sarà uguale al numero di tentativi possibili flag var cambia in false e il gioco finisce
        if (userAttempts.length == numAttempts) {
            continueGame = false;
            winOrLost(winner, userAttempts);
        }
    }
}

//-----------
// Functions
//-----------

// function per numero random per generare con bombe
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creo bombe ossia un array di 16 elementi random e unici
function generateBomb (numBombs, minRange, maxRange) {

    const numArray = [];

    while (numArray.length < numBombs) {

        const numRand = getRndInteger(minRange, maxRange);

        if(!numArray.includes(numRand)) {
            numArray.push(numRand);
        }
    }
    return numArray;
}

// function per output
function winOrLost (result, score) {
    if (result === winner) {
        alert('Hai vinto');
        alert(`'Il tuo punteggio è ${score.length * 10}'`);

    } else {
        alert('Hai perso');
        alert(`'Il tuo punteggio è ${score.length}'`);
    }
}