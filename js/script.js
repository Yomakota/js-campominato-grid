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