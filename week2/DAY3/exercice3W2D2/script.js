/*Exercise 1: Simple If/Else Statement
Instructions
Create 2 variables, x and y. 
Each of them should have a different numeric value.
Write an if/else statement that checks which number is bigger.
Example :

let x = 5;
let y = 2;

You should display:
x is the biggest number*/

// let x = 4 ;
// let y = 2; 

// if (x>y) {
//     console.log("x");
// }else {
//     console.log("y");
// }











/*Exercise 2: Chihuahua
Instructions
Create a variable called newDog where it’s value is “Chihuahua”.

Check and display how many letters are in newDog.

Display the newDog variable in uppercase 
and then in lowercase (no need to create new variables, 
just console.log twice).

Check if the variable newDog is equal to “Chihuahua”

if it does, display 
‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’ 
*/


// let newDog = "Chihuahua";
// newDog.length  // 9 lettres or consol.log(newdog.length);
// newDog.toLowerCase()
// console.log(newDog.toLowerCase()); ecrire les deux dans une seule variable 

// let newDog1 = newDog.toLowerCase();
// console.log(newDog);
// console.log(newDog1);

// newDog1 = newDog.toUpperCase();
// console.log(newDog1);

// let newDog1 = newDog.toUpperCase();
// newDog.length  // 9 lettres 
// newDog.toUpperCase()







/*Exercise 3: Even Or Odd
Instructions
Prompt the user for a number and save it to a variable.
Check whether the variable is even or odd = pair et impair 
If it is even, display: “x is an even number”. 
Where x is the actual number the user chose.
If it is odd, display: “x is an odd number”. 
Where x is the actual number the user chose.*/


// let number = prompt ("enter number"); // en le mettant dans une variable je le garde 

// if (isNaN(number) === true) { // if is not a number ?  
//     alert("please enter a valid number");
// }else{
//     console.log("this is a number");
//     if (Number(number)%2 === 0 ) {
//         console.log("even");// pair 

//     }else {
//         console.log("odd");// impair 
//     }
// }

 







/*Exercise 4: Group Chat
Instructions
Below is an array of users that are online in a group chat.

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

Using the array above, console.log the number of users 
that are connected to the group chat based on the following rules:

If there is no users (the users array is empty), console.log “no one is online”.
If there is 1 user, console.log “<name_user> is online”.
If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
If there are more than 2 users,
 console.log the first two names in the users array and the number of additional users online.
For example, if there are 5 users, it should display:
name_user1, name_user2 and 3 more are online*/


 




// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// console.log(users.length);

// let len = users.length;

// if (len === 0) {
//     console.log("no one is online");

// } else if ( len === 1) {
//     console.log(users[0] +" is online");
// } else if (len === 2) {
//     console.log(users[0] + " " + users[1] +" is online ");
// }else if (len > 2 ) {
//     console.log(users[0] + " " + users[1] + (len - 2) +  "more are online");
// }

// let objt = {  brouillon
//  name : "amber",
//  age : "24",
//  statuts : "single",
//  }
//  console.log(objt);

//  let array = [
//     { name : "amber" , age :24 , status : "single"},
//     { name : "ben" , age: 47 , status : "notsure"}
//  ]
//  console.log(array[1].status);

// exercice 1 list of people

// let people = ["Greg", "Mary", "Devon", "James"];

// people.shift()
// console.log(people);

// people[2] = "jason";
// console.log(people);

// people.pop();
// people.push("jason");
// console.log(people);

// console.log(people.indexOf("Mary"));

// let people1= people.slice(1); // je dois creer une nouvelle array 
// console.log(people);

//people.indexOf("ziv"));  return -1  not findind because not here 

// let last = people[people.length-1]; //  lenght is longer more 1 so lenght -1 for the index 
// console.log(last);

// for(let x=0; x< people.length;x++) {
//     console.log(people[x]);
//     if (people[x] === 'Jason') {
//         break;
//     }
// }

let colors = [ "white" , "yellow", "blue" , "red" ];
let choices = ["st","nd","rd","th" ];
 
for(let x=0; x< colors.length;x++) {
    if (x <3 ) {
        console.log("my "+  (x+1) + choices[x] + " is " + colors[x]);
    }else {
        console.log("my "+ (x+1) + choices[3] + " is " + colors[x]);
    }
// } je rejoute à 3 because after its obly th 



 // exerice 3 number egale a celui que je demande

// let number ;

// do {
//      number = prompt("new number?"); // number egale a celui que je demande
// console.log(typeof number);

// }   

// while (number<10);
   

// exercice 4 :

// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// }

// console.log(building.numberOfFloors);

// console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
    
// console.log(building.nameOfTenants[1] + building.numberOfRoomsAndRent.dan[0]);
   

// let sarahRent = building.numberOfRoomsAndRent.sarah[1];
// let davidRent = building.numberOfRoomsAndRent.david[1];
// let danRent = building.numberOfRoomsAndRent.dan[1];


//  if (sarahRent + davidRent > danRent) {
//     building.numberOfRoomsAndRent.dan[1] = 1200 ;
//  } 

//  console.log(building);
 
// // EXERCICE 5 

// let family = {
//     father :  "doron",
//     mother : "laura",
//     daughter : "lili",
// };

//  for (const x in family) {
//     console.log(x,family[x]);
//  }

 
// // exercice 6 

// let details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

// for (const x in details) {
//     console.log(x,details[x]);
// }

// // EXERCICE 7 

// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//  console.log(names);
// names.sort()
// console.log(names);


// let str = "";  // pour pouvoir avoir les initiales alignés 


// for (let x = 0; x < names.length; x++) {
//      str = str + (names[x][0]);
// }
// console.log(str);


// exercice en classe :
// Create a structured HTML file linked to a JS file

// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"


//  for (let index = 0; index < 15; index++) {
//     if (index %2  === 0) {
//         console.log(even); // EVEN PAIR 
//     }else {
//         console.log(odd);
//     }
    
//  }
  
// exercice en classe :

let names= ["john", "sarah", 23, "Rudolf",34]

for (let index = 0; index < names.length; index++) {
    if (typeof(names) !== "string" ) {
        continue 
    } if (typeof(names[index])=== "string") {
        console.log("the item is a string");
      if (names[index].charAt(0) !== names[index].charAt(0).toUppercase()) {
            console.log(names[index].charAt(0).toUppercase() + names[index].slice(1));
      }
    }
     
}
 
// check if its first letter is in uppercase. If not, change it to uppercase and then display the name.
// word.charAt(0)




for (let index = 0; index < names.length; index++) {
    if (typeof(names[index]) !== "string)" {
       break
    } if (typeof(names[index]) === "string") {
        console.log(names[index]);
    }
    
}