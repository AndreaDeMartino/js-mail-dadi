
// Gioco dei dadi
// generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto


// Creo un array: 
var emailList = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];

// Chiedo all’utente la sua email:
var emailUser = prompt('Inserisci la tua email').toLowerCase();

// Controllo che sia nella lista di chi può accedere e stampo un messaggio appropriato sull’esito dell controllo:
for (var i = 0; i < emailList.length; i++){
  if( emailList[i].toLowerCase() == emailUser){
    var emailMatch = emailList[i];
    console.log('Email Trovata!');
  }
}

if( emailMatch != emailUser){
  console.log('Email Non Trovata');
}
