/*exercice 1 This car will only let you drive if you are over 18. 
Make it do the following:

Using prompt() and alert(), ask a user for their age.

IF they say they are below 18, respond with: 
"Sorry, you are too young to drive this car. Powering off
IF they say they are 18, respond with:
 "Congratulations on your first year of driving.!
// IF they say they are over 18, respond with: 
"Powering On. Enjoy the ride!*/


prompt ("how old are you? ");

let age = 18

if (age < 18) {
    alert('Sorry, you are too young to drive this car');
}if (age == 18) {
    alert('Congratulations on your first year of driving !');
}if (age > 18) {
    alert('Enjoy the ride');
}


prompt ("how old are you? ");

let age = 18;

if (age < 18) {
    alert("Sorry, you are too young to drive this car");
} else if (age < 18) {
    alert("Enjoy the ride");
} else  {
    alert("Congratulations on your first year of driving.");
}





prompt ('how old are you? ');

//let age = 12;
// why do i have to change the year of the age for it to work ?? 

let age = 18 

if (age === 18) {
    alert('Congratulations on your first year of driving.')
} else if (age > 18) {
    alert('Enjoy the ride')
} else {
   alert('Sorry, you are too young to drive this car')
}







/*Exercise 2
Write as comments the steps of the resolution of this piece of code
 Guess what will be the result before checking it 
 THE RESULTS will be "exactly" because a=2+2 = 4 */ 

/*let a = 2 + 2;

switch (a) {
    case 3:
      alert( 'Too small' );
      break;
    case 4:
      alert( 'Exactly!' );
      break;
    case 5:
      alert( 'Too large' );
      break;
    default:
      alert( "I don't know such values" );
  }*/

  let a = 2+2;

      if (a < 3) {
        alert('Too small');
      } else if (a == 4) {
        alert('Exactly');
      } else if (a > 5) {
        alert('Too large')
      } 

      // how to add the default ?? 







/* exercice 3 :


let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
the results will be right case 4 
*/

let a = 2+2;
 if ( a == 4) {
    alert('Right!')
 } else if ( (a > 3 && a > 5)) {
    alert('Wrong!');
    alert("Why don't you take a math class?");
 }  default {
    alert('The result is strange. Really.');
 }


 