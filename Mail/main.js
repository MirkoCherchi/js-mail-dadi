'use strict';

// 1. Chiediamo all'utente tramite prompt la sua email
// 2. Creiamo una lista di email con un array
// 3. Confrontiamo l'email dell'utente con la lista delle email presenti
// 4. Stampiamo un messaggio dopo il controllo

const emailRichiesta = prompt('Inserisci la tua Email')

const emailArray = ['email1@gmail.com', 'email2@gmail.com', 'email3@gmail.com', 'email4@gmail.com', 'email5@gmail.com', 'email6@gmail.com', 'email7@gmail.com',]


for (let verifica = 0; verifica < emailArray.length; verifica++){
    const mailUtente = emailArray[verifica];
    if (emailRichiesta === mailUtente) {
    
} 
}

    


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (emailUtente === emailArray) {
//         alert('email presente');
//     }
//     else (emailUtente !== emailArray) 
//         alert('email non presente');
    
    
// }

