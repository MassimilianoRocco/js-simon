let randomNumbersList = [];
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
    // Generate a sequence of random number between 1 and 5 + innerhtml

    for (let i=1;i<=20;i++){
        randomNumbersList.push(Math.floor(Math.random()*20)+1);
    }

let firstNumber = randomNumbersList[Math.floor(Math.random()*19)];
let secondNumber = randomNumbersList[Math.floor(Math.random()*19)];
let thirdNumber = randomNumbersList[Math.floor(Math.random()*19)];
let fourthNumber = randomNumbersList[Math.floor(Math.random()*19)];
let fifthNumber = randomNumbersList[Math.floor(Math.random()*19)];

randomFiveNumbers.push(firstNumber);
randomFiveNumbers.push(secondNumber);
randomFiveNumbers.push(thirdNumber);
randomFiveNumbers.push(fourthNumber);
randomFiveNumbers.push(fifthNumber);
console.log(randomFiveNumbers);

 firstN.innerHTML = firstNumber;
 secondN.innerHTML = secondNumber;
 thirdN.innerHTML = thirdNumber;
 fourthN.innerHTML = fourthNumber;
 fifthN.innerHTML = fifthNumber;
}

function cancelHtmlNumber(){
    firstN.innerHTML = "";
    secondN.innerHTML = "";
    thirdN.innerHTML = "";
    fourthN.innerHTML = "";
    fifthN.innerHTML = "";

    userNumberGenerator();
    compareNumbers();
}

function userNumberGenerator(){
    for(let x=0; x<5; x++){
        userPick = parseInt(prompt('Please enter a number from 1 to 20'));
        userNumbers.push(userPick);
    }
    console.log(userNumbers);
}

function compareNumbers(){
    for(let i = 0; i<5; i++){
        if(randomFiveNumbers.includes(userNumbers[i])){
            guessedCounter++;
            guessedNumber.push(userNumbers[i]);
        }
    }
    console.log("Hai indovinato " + guessedCounter + " numeri!");

    if(guessedNumber.length != 0)
    console.log("In particolare hai indovinato: " + guessedNumber)
    
}