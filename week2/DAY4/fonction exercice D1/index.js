
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

// function myAge (userAge) {
//     console.log(mumAge + dadAge);
// }

// myAge(24);
// mumAge(myAge*2 );
// dadAge( mumAge/1.2);
 
// function myFonction(myAge) {
//     let myMom = myAge*2;
//     let myDad = myMom /1.2
//     console.log(myMom , myDad);
// }
 
// myFunction (24) 





// Exercise 2
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function

// function mafonction(myAge) {
//     return myAge*2
// }
// let momAge = mafonction (24)
// console.log(momAge);

// exercice XP 
// Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.


// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// function infoAboutMe() {
//     console.log("my name is Ambre and i'm 23 years old");
// }

// infoAboutMe()

// // part II 

// function infoAboutPerson(personName , personAge , personFavoriteColor) {
//    console.log( "You name is" + personName , "you are" + personAge + "years old3", "your favorite color is" + personFavoriteColor)
// }

// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.


// function calculateTip() {
//   let bill = prompt("how much is the bill ? ")
//   if (bill < 50 ) {
//     return Number(bill) + bill*20/100;
//   }
//   else if ( 50 > bill && biil < 200 ) {
//     return  Number(bill) + bill*15/100;
//   }
//   else if (bill > 200 ) {
//     return Number(bill) + bill*10/100
//   }
// }


// let result = calculateTip()
// console.log(result );



// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.


// function isDivisible() {
//     for (let index = 0; index < 500; index++) {
//         if (index%23 === 0) { // check not a calculation 
//             console.log(index);
//         } 
//     }
// }

// isDivisible()

// Exercise 4 : Shopping List
 
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana", "orange", "apple"] ;

// function myBill() {
//     for (let index = 0; index < shoppingList.length; index++) {
//         if (stock[shoppingList[index]] > 0) {     
//             console.log(shoppingList[index] + " " + prices[shoppingList[index]]); 
//         } 
//     }
// }


// myBill()



// Exercise 5 : What’s In My Wallet ?


// function changeEnough(itemPrice, amountOfChange){
//     let change = [0.25,0.1,0.05,0.01]
//     console.log(amountOfChange);
//     let sum = 0;
//     for (let index = 0; index < amountOfChange.length; index++) {
//         sum = sum + amountOfChange[index]*change[index];
//         // console.log(index);
//     } 
//     console.log(sum);// ce que j'ai dans ma poche 
//     if (sum >= itemPrice) {
//         return true
//     } else  {
//     return false
//     }
// }


// let ret = changeEnough(4.15, [25, 20, 5, 0])
// console.log(ret);




// Exercise 6 : Vacations Costs

// 1.
function hotelCost () {
    let answerNight = prompt("how many night you want to stay");
    if ( typeof(answerNight) === "undefined" || (answer === NaN)) {
        let answerNight = prompt("how many night you want to stay");
       return (answerNight*140);
    }  

}

let answerNight = hotelCost();

// 2.


let  answerDestination = {
    London:183, 
    Paris:220 , 
    other :300
}; 

let destination = {
    "London": 183 ,
    "Paris":220,
    "all the others destination":300,
}
function planeRideCost() {
        let answerDestination = prompt("what is your destination ? ");
    if (typeof(answerNight) === "undefined" || typpeof(answerNight) !== "string") {
        let answerDestination = prompt("what is your destination ? ");
    } return answerDestination.destination[index];
}

answerDestination.destination[index] = planeCost()




// 3.

function rentalCost() {
    let answerRental = prompt("how many days rent the car")
    if ( answerRental === "  " || answer === NaN) {
      let answerRental = prompt("how many days rent the car")
      return answerRental*40; 
    }if (answerRental> 10 ) {
        return (answerRental*40/5/100);
    }
}


let answerRental = rentalCost()

// 4.

function totalVacationCost()  {
    return hotelCost + planeCost + rentalCost;
    console.log("The car cost " + rentalCarCost + " the hotel cost " + hotelCost + "the plane tickets cost " + planeCost ); 
}

 
totalVacationCost()
 

// final :

function hotelCost() {
    let isNum = true; 
    let pricePerNight = 140;
    while (isNum) {
        let nightNum = parseInt(prompt("How many nights? "));
        if(isNaN(nightNum)){
            alert("not a number");
        }else{
            isNum = false;
            return nightNum * pricePerNight;
        }
    }
}


function planeRideCost() {
    let isStr= true; 
    let london = 183;
    let paris = 220;
    let other = 300;
    while (isStr) {
        let destination = prompt("What is your destination? ").toLowerCase();
        if(!isNaN(destination)){
            alert("not a word..");
        }else{
            isStr = false;
            if(destination == "paris"){
                return paris;
            }else if(destination == "london"){
                return london;
            }else{
                return other;
            }
        }
    }
}


function rentalCarCost() {
    let isNum = true; 
    let carCost = 40;
    let sum;
    while (isNum) {
        let numOfDays = parseInt(prompt("How many days do you want ther rent the car for?  "));
        if(isNaN(numOfDays)){
            alert("not a number");
        }else{
            isNum = false
            sum = numOfDays * carCost;
            if(numOfDays < 10){
                return sum
            }else{
                return sum -= sum * 0.05
            }
        }
    }
}
function totalVacationCost(){
    let total = hotelCost() + planeRideCost() + rentalCarCost();
    return `your total is $${total}`
}

console.log(totalVacationCost())


 