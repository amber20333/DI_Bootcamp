/* Exercice 1 :your favorite food 

Store your favorite food into a variable.

Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

Console.log I eat <favorite food> at every <favorite meal>*/

// let favoriteFood = "sushi";
// let favoriteMeal = "dinner";

// // console.log('i eat' +favoriteFood `at every${favoriteMeal}` ); ou 

// console.log(" i eat " + favoriteFood +  " at every " + favoriteMeal );












/*Exercise 2 : Series
 
Part I
Using this array : let myWatchedSeries = ["black mirror", "money heist", 
"the big bang theory"];

Create a variable named myWatchedSeriesLength that is equal to the number 
of series in the myWatchedSeries array.

Create a variable named myWatchedSeriesSentence, that is equal
to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory

Console.log a sentence using both of the variables created above
For example :
 I watched 3 series : black mirror, money heist, and the big bang theory


Part II
Change the series “the big bang theory” to “friends”. 
Hint : You will need to use the index of “the big bang theory” series.
Add, at the end of the array, the name of another series you watched.

Add, at the beginning of the array, the name of your favorite series. unshift()

Delete the series “black mirror”.  
To remove the first element, use shift()

Console.log the third letter of the series “money heist”.

Finally, console.log the myWatchedSeries array,
 to see all the modifications you’ve made.*/




let myWatchedSeriesLength = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory";

console.log('i watched 3 series ' + myWatchedSeriesLength );

//let myWatchedSeriesLength = ["black mirror", "money heist", "the big bang theory"]

myWatchedSeriesLength[2]="friends"

console.log(myWatchedSeriesLength); // friends instead of b b th 
myWatchedSeriesLength.push("gossip girl")

console.log(myWatchedSeriesLength); //black mirror,

myWatchedSeriesLength.unshift("dr house");
myWatchedSeriesLength.shift("balck mirror"); 
//dr house , money heist, friends, gossip girl

var moneyHeist = myWatchedSeriesLength[1];
console.log(moneyHeist[2]);
// console.log(money heist ); pour faire  apparaitre la third lettre  of money heist ??? 

console.log(myWatchedSeriesLength);

 








 /*Exercise 3 : The Temperature Converter
 
Store a celsius temperature into a variable.

Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
Hint : Should you create another variable to hold the temperature in fahrenheit? 
(ie. point 2) yes !
Hint: To convert a temperature from celsius to fahrenheit 
: Divide it by 5, then multiply it by 9, then add 32 */


let celsius = 32; // the temparature right now 32 degree celsius
let celsiustoF = (celsius*9)/5 +32;
console.log(celsius + "°C"  + " is " + celsiustoF + "°F" );  

let fahrenheit = //  89.6









/*Exercise 4 : Guess The Answers #1
 
For each expression, predict what you think the output will be 
in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in
 a comment and compare it with your prediction.*/


/*What will be the outcome of a + b in the first expression ?  
What will be the outcome of a + b in the second expression ?  
What is the value of c?
You have created the variable a, but it has no assignment and is undefined.

*/


 let c ;
 let a = 34;
 let b = 21;

 console.log(a+b) //first expression
 // Prediction: 34 and 21 
 // Actual: 55

 a = 2;

 console.log(a+b) //second expression
 // Prediction: 2 and 21 
 // Actual: 23



 console.log(3 + 4 + '5');
// Prediction:  because 3 and 4 and 5 are numbers
// Actual: 12







 /*Exercise 5 : Guess The Answers #2
 
For each expression, predict what you think the output will be 
in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. 
Note the actual output in a comment and compare it with your prediction.

L'opérateur typeof renvoie une chaîne qui indique le type de son opérande.
*/



typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:number
// Actual:number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual:  boolean

typeof(1 != 2)
// Prediction:
// Actual:boolean why ? 

"hamburger" + "s"
// Prediction:
// Actual: string

"hamburgers" - "s"
// Prediction:string
// Actual: number

"1" + "3"
// Prediction: number
// Actual:string because of the "" ??

"1" - "3"
// Prediction: string
// Actual: number

"johnny" + 5
// Prediction:string
// Actual:string

"johnny" - 5
// Prediction:number 
// Actual:number

99 * "hello"
// Prediction: number
// Actual:number

1 != 1
// Prediction:boolean
// Actual:boolean

1 == "1"
// Prediction:boolean
// Actual: boolean

1 === "1"
// Prediction:boolean
// Actual: boolean






/*Exercise 6 : Guess The Answers #3
Instructions
For each expression, predict what you think the output 
will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. 
Note the actual output in a comment and compare it with your prediction.
What is the output of each of the expressions below?*/


5 + "34"
// Prediction: string
// Actual:string

5 - "4"
// Prediction:number
// Actual:number

10 % 5
// Prediction: number
// Actual:number

5 % 10
// Prediction:number
// Actual:number

"Java" + "Script"
// Prediction: string
// Actual:string

" " + " "
// Prediction: string ou null
// Actual:string

" " + 0
// Prediction: string
// Actual:string

true + true
// Prediction:boolean
// Actual: number

true + false
// Prediction: boolean
// Actual: number 

false + true
// Prediction:number
// Actual:number

false - true
// Prediction:boolean
// Actual:number 

!true
// Prediction:boolean
// Actual: boolean

3 - 4
// Prediction:number
// Actual:number

"Bob" - "bill"
// Prediction:number 
// Actual:number 