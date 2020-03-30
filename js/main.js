// Creo un array: 
var emailList = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];

// Chiedo all’utente la sua email:
var emailUser = prompt('Inserisci la tua email');

// Controllo che sia nella lista di chi può accedere e stampo un messaggio appropriato sull’esito dell controllo:
for (var i = 0; i < emailList.length; i++){
  if( emailList[i].toUpperCase() == emailUser.toUpperCase() ){
    var emailMatch = emailList[i];
    console.log('Email Trovata!');
    document.getElementById('check-email').innerHTML = emailMatch.toUpperCase();
  }
}

if( emailMatch != emailUser){
  console.log('Email Non Trovata');
  document.getElementById('check-email').innerHTML = 'EMAIL NON TROVATA';
}

// Gioco dei dadi

// Genero un numero random da 1  a 6, sia per il giocatore sia per il computer:

var userNumber;
var computerNumber;
var result;

userNumber = (Math.floor((Math.random() * 6) + 1));
console.log('Punteggio Giocatore ' + userNumber);

computerNumber = (Math.floor((Math.random() * 6) + 1));
console.log('Punteggio Computer ' + computerNumber);


// Stabilisco il vincitore, in base a chi fa il punteggio più alto:
if( userNumber > computerNumber){
  console.log("Il giocatore vince");
  result = 'IL GIOCATORE VINCE'
}

else if ( computerNumber > userNumber){
  console.log("Il Computer vince");
  result = 'IL COMPUTER VINCE'
}

else if ( computerNumber == userNumber){
  console.log("Pareggio");
  result = 'PAREGGIO'
}

// INTERAZIONE BUTTON
var playButton = document.getElementById('play-button');
var manImg = document.getElementById('man-img');

playButton.addEventListener('click', 
  function() {
    manImg.className = manImg.classList = 'man-moving';
    console.log(manImg.classList);
    document.getElementById('player-score').innerHTML = 'USER SCORE:<br>' + userNumber;
    document.getElementById('computer-score').innerHTML = 'COMPUTER SCORE:<br>' + computerNumber;
    document.getElementById('result').innerHTML = result;


  }
);

