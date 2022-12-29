/*Exercise 1
Create a stuctured html file linked to a JS file

1. Create an object that has properties "username" and "password". 
Fill those values in with strings.

2. Create an array which contains the object you have made above 
and name the array "database".

3. Create an array called "newsfeed" which contains 3 objects
 with properties "username" and "timeline".*/

//  let objectDetails = {
//     userName:"boubou",
//     passWord:"1234",
//  };


//  let database = ['objectDetails'];

//  let newsfeed = [{userName: "boubou", passWord: "1234" , timeline: "29/9/2022" }];


// exercice en classe 

const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object

 userCart["lastname"]= "smith";
//  ou userCart.lastname =  "smith";


// 2. Change the price of the pear, so it will contain the Taxes. 17%

userCart["prices"]["pear"] =  userCart["prices"]["pear"] *1.17


// 3. Ask the user for the fruit he wants between Apple, Banana and Pear
//. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
const answer = prompt("which fruits apple banana or pear ").toLocaleLowerCase();



// 4. Console.log the price for the specific fruit the user wants

// console.log(userCart.prices.answer); error 

 console.log(usercart["prices"][answer]) //mais sans les ""

 console.log( `the price of the ${}    ` );
