'use strict';


const bottone = document.querySelector ('.btn');
let risultato = document.querySelector ('.risultato')


bottone.addEventListener('click', function(){
    
 const giocatore = Math.floor(Math.random() * 6) + 1;
 console.log('Numero Giocatore', giocatore);
 const computer = Math.floor(Math.random() * 6) + 1;
 console.log('Numero Computer', computer);
 const punteggioG = document.querySelector('.punteggiog');
 punteggioG.innerHTML = giocatore;
const punteggioC = document.querySelector('.punteggioc');
punteggioC.innerHTML = computer;

     
if (giocatore < computer) {
     console.log('Computer win');
     risultato.innerHTML = 'Computer Win';
    
 } else if (computer < giocatore) {
     console.log('Giocatore win');
     risultato.innerHTML = 'Giocatore Win';
 } else {
     console.log('Pareggio');
     risultato.innerHTML = 'Pareggio';
 }
})






 
// const giocatore1 = Math.floor(Math.random() * 6) + 1;
// const giocatore2 = Math.floor(Math.random() * 6) + 1;
// console.log('Numero Giocatore', giocatore1 + giocatore2);
// const computer1 = Math.floor(Math.random() * 6) + 1;
// const computer2 = Math.floor(Math.random() * 6) + 1;
// console.log('Numero Computer', computer1 + computer2);

// if (giocatore1 + giocatore2 < computer1 + computer2) {
//      console.log('Computer win');
    
// } else if (computer1 + computer2 < giocatore1 + giocatore2) {
//      console.log('Giocatore win');
//  } else {
//      console.log('Pareggio');
//  }