// Creo un array: 
var emailList = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];

// Chiedo all’utente la sua email:
var emailUser = prompt('Inserisci la tua email');
var emailCheck = false;
// Controllo che sia nella lista di chi può accedere e stampo un messaggio appropriato sull’esito dell controllo:
for (var i = 0; i < emailList.length; i++){
  if( emailList[i].toUpperCase() == emailUser.toUpperCase() ){
    var emailMatch = emailList[i];
    console.log('Email Trovata!');
    alert('Accesso eseguito correttamente');
    emailCheck = true;
    document.getElementById('check-email').innerHTML = emailMatch.toUpperCase();
  }
}

if( emailMatch != emailUser){
  console.log('Email Non Trovata');
  document.getElementById('check-email').innerHTML = 'EMAIL NON TROVATA';
  alert('La tua email non è stata riconosciuta, non potrai giocare.');
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
var scorePlayer = document.getElementById('player-score');
var scoreComputer =  document.getElementById('computer-score');
var diceComputer;
var dicePlayer;
var resultShow = document.getElementById('result');

if ((userNumber) == 1){
  dicePlayer = '<i class="fas fa-dice-one"></i>';
}

if (userNumber == 2){
  dicePlayer = '<i class="fas fa-dice-two"></i>';
}

if (userNumber == 3){
  dicePlayer = '<i class="fas fa-dice-three"></i>';
}

if (userNumber == 4){
  dicePlayer = '<i class="fas fa-dice-four"></i>';
}
if (userNumber == 5){
  dicePlayer = '<i class="fas fa-dice-five"></i>';
}
if (userNumber == 6){
  dicePlayer = '<i class="fas fa-dice-six"></i>';
}

if ((computerNumber) == 1){
  diceComputer = '<i class="fas fa-dice-one"></i>';
}

if (computerNumber == 2){
  diceComputer = '<i class="fas fa-dice-two"></i>';
}

if (computerNumber == 3){
  diceComputer = '<i class="fas fa-dice-three"></i>';
}

if (computerNumber == 4){
  diceComputer = '<i class="fas fa-dice-four"></i>';
}
if (computerNumber == 5){
  diceComputer = '<i class="fas fa-dice-five"></i>';
}
if (computerNumber == 6){
  diceComputer = '<i class="fas fa-dice-six"></i>';
}


  playButton.addEventListener('click', 
  function() {
    if (emailCheck == true) {
    manImg.classList = 'man-moving';
    console.log(manImg.classList);
    resultShow.classList = 'u-green' + ' show';
    scorePlayer.innerHTML = 'PLAYER SCORE:<br>'+ dicePlayer;
    scoreComputer.innerHTML = 'COMPUTER SCORE:<br>' + diceComputer;
    document.getElementById('result').innerHTML = result;
  }
}
);

