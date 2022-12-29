

 
// first part.

function playTheGame() {
    let num=;
    let computerNumber =;
    let play = confirm("Hello, would you like to play? ")
    if(play == false){
        alert("No problem, Goodbye")
} else {
    let num =true ;
    while (num) {
        num =  prompt(`Ok ${userName}, enter a number between 0 and 10: `);
}
}if (num == NaN) {
    alert("“Sorry it is not a good number, Goodbye”.");
}else if(num >= 10 || num == 0){
    alert("Sorry it is not a good number, Goodbye”.");
}else{
   computerNumber = Math.floor(Math.random*10);
}
}

playTheGame()

// Second part . 


function compareNumbers(userNumber,computerNumber) {
    if (userNumber === computerNumber) {
        alert("winner");
        break;
    }else if (userNumber > computerNumber) {
         alert("Your number is bigger then the computer, guess again");
         prompt("try again enter a new number between 0 and 10")
    }if (userNumber < computerNumber) {
        alert("Your number is smaller then the computers, guess again");
        prompt("try again enter a new number between 0 and 10")
    }for (let index = 0; index < 3; index++) {
        alert("out of chances ")
        break
        
    }
}

compareNumbers()