'use strict';

const emailRichiesta = prompt('Inserisci la tua Email')
const emailArray = ['email1@gmail.com', 'email2@gmail.com', 'email3@gmail.com', 'email4@gmail.com', 'email5@gmail.com', 'email6@gmail.com', 'email7@gmail.com',]
let emailCorretta = false;


for (let verifica = 0; verifica < emailArray.length; verifica++){
    
    if (emailArray[verifica] === emailRichiesta) {
        emailCorretta = true;  
    }
}

if (emailCorretta) {
    console.log('Email corretta: ', emailRichiesta);
    alert ('email corretta')
    
} else{
console.log('Email errata: ', emailRichiesta);
    alert ('email errata');
}

    



