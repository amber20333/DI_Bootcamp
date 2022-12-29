function playGame() {
    let user;
    let computerNumber;
    let check = confirm("Do you want to play the game ? ")
      if (check){
         user = prompt("Enter a number between 0-10:");
        if (user > 10 || user < 0){
          alert("Not a good number, goodbye");
        } else if (isNaN(user)) {
          alert("Not a number. goodbye");
        } else{
         computerNumber = Math.floor(Math.random() * 10)
        }
      } else{
        alert("No problem, goodbye");
      } 
     compareNumbers(user,computerNumber) 
    }
    



// Second part . 


function compareNumbers(userNumber,computerNumber) {
    for (let index = 0; index < 4; index++) {  
    if (userNumber === computerNumber) {
        alert("winner");
        break
    }if (index === 3) {
        alert("out of chances ")
        break
    }else if (userNumber > computerNumber) {
         alert("Your number is bigger then the computer, guess again");
        let answer= prompt("try again enter a new number between 0 and 10")
    }if (userNumber < computerNumber) {
        alert("Your number is smaller then the computers, guess again");
       let answer= prompt("try again enter a new number between 0 and 10")
    }
         
    }
  
        
    }

 

 

