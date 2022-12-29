/* exercice 1 
1. Create these variables and give them values:

addressNumber
addressStreet
country
2. Write a variable named globalAddress, and concatenate inside, the variables:

addressNumber
addressStreet
country
In order to create a sentence

 3. Display globalAddress Example: globalAddress should display
  « I live in BenYehuda 5, in Israel » */

  
  let addressNumber ="12";
  let addressStreet="dizengof";
  let country="Israel";
  let globalAddress = "i live in "  +  country + "in the adresse"  +  addressStreet + "" +addressNumber  ;
  // console.log(" i live in "+ addressStreet + "  " + addressNumber , " in "  +country);


/*exercice 2 
1. Store your birth year in a variable.

2. Store a future year in a variable.

3. Calculate your possible ages for that year based on the stored values.

// 4. Display : "I will be NN in YYYY", substituting the values.*/

 
let birthYear = "1998";
let futureYear = "2023";
let age = birthYear-futureYear;
console.log(" i will be " + age  + " in "  + futureYear);

/*exercice 3 
1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']

2. Display dog

3. Add to the array pets, the pet horse. Remove the pet rabbit

4. Display the array length */

let pets = ['cat','dog','fish','rabbit','cow']
// console.log(pets[1]); dog

 
 
pets.push("horse") // je rajoute un animal 
console.log(pets); // tout les animaux s'affichent avec le horse 
pets.pop("rabbit") // je retire un animal le rabbit 
console.log(pets);

// ou le methode splice let pets = ['cat','dog','fish','rabbit','cow']

pets.splice(3,1,"horse")
console.log(pets);
 // ['cat', 'dog', 'fish', 'horse', 'cow']


pets.length // 5 




// prompt c'est de demander au clients d'entrer ses données et vont etre stockés dans la variable 
// var p = prompt "quel est votre nom"
// alert (p) 
// ou var b= prompt "quel est votre prénom" avec une alerte 


