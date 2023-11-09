'use strict';

const giocatore = Math.floor(Math.random() * 6) + 1;
console.log('Numero Giocatore', giocatore);

const computer = Math.floor(Math.random() * 6) + 1;
console.log('Numero Computer', computer);

if (giocatore < computer) {
    console.log('Computer win');
    
} else if (computer < giocatore) {
    console.log('Giocatore win');
} else {
    console.log('Pareggio');
}