let randomFiveNumbers = [];
let userNumbers = [];
let guessedNumber = [];
let guessedCounter = 0;

let firstN = document.getElementById("first-number");
let secondN = document.getElementById("second-number");
let thirdN = document.getElementById("third-number");
let fourthN = document.getElementById("fourth-number");
let fifthN = document.getElementById("fifth-number");

function numbersGenerator(){
    // GENERA 5 NUMERI CASUALI E LI SALVO IN UN ARRAY + innerhtml

    for (let i=1;i<=5;i++){
        randomFiveNumbers.push(Math.floor(Math.random()*100)+1);
    }
    console.log(randomFiveNumbers);

 firstN.innerHTML = randomFiveNumbers[0];
 secondN.innerHTML = randomFiveNumbers[1];
 thirdN.innerHTML = randomFiveNumbers[2];
 fourthN.innerHTML = randomFiveNumbers[3];
 fifthN.innerHTML = randomFiveNumbers[4];
}

//FUNZIONE CHE SETTA IL TIMER E LO STAMPA IN PAGINA
function timerOn(){
    let seconds = 5;
    let ilMioTimer = setInterval(function() {
    	if(seconds!=0) {
    		document.getElementById("timer").innerHTML = "Conto alla rovescia: " + seconds;
    		seconds--;
    	} else {
            firstN.innerHTML = "";
            secondN.innerHTML = "";
            thirdN.innerHTML = "";
            fourthN.innerHTML = "";
            fifthN.innerHTML = "";
    		document.getElementById("timer").innerHTML =  "Adesso è il tuo turno!";
    		clearInterval(ilMioTimer);
    	}
    }, 1000);
}


//FUNZIONE CHE CHIEDE ALL'UTENTE DI INSERIRE DEI NUMERI
function userNumberGenerator(){
    for(let x=0; x<5; x++){
        userPick = parseInt(prompt('Cerca di ricordare i precedenti numeri ed inseriscine qui 5 tra 1 e 20'));
        userNumbers.push(userPick);
    }
    console.log(userNumbers);
}

//FUNZIONE PER COMPARARE I VALORI INSERITI DALLA CONSOLE E QUELLI DELL'UTENTE
function compareNumbers(){
    for(let i = 0; i<5; i++){
        if(randomFiveNumbers.includes(userNumbers[i])){
            guessedCounter++;
            guessedNumber.push(userNumbers[i]);
        }
    }
    document.getElementById("timer").innerHTML = "Hai indovinato " + guessedCounter + " numeri!.";
    console.log("Hai indovinato " + guessedCounter + " numeri!");

    if(guessedNumber.length != 0){
        document.getElementById("timer").innerHTML += " In particolare hai indovinato: " + guessedNumber
        console.log("In particolare hai indovinato: " + guessedNumber)
    }
}

