/*Using this array : exercice 1 

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

remove Banana from the array.

Sort the array in alphabetical order.

Add “Kiwi” to the end of the array.

Remove “Apples” from the array. Don’t use the same method as in part 1.

Sort the array in reverse order. (Not alphabetical, 
but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])


At the end you should see this outcome:
["Kiwi", "Oranges", "Blueberries"]*/


 
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits
fruits.shift();
fruits // ["Apples", "Oranges", "Blueberries"]

// donc on veut apple blueberries oranges 
let fruits =["Apples", "Oranges", "Blueberries"];
fruits[1]="Blueberries"
fruits[2]="oranges"
console.log(fruits);
// ca m'affiche  ['Apples', 'Blueberries', 'Oranges']


//Add “Kiwi” to the end of the array.

fruits.push("Kiwi");
console.log(fruits);
// ['Apples', 'Blueberries', 'Oranges', 'kiwi']


// Remove “Apples” from the array. 
// Don’t use the same method as in part 1. use the methode of splice

//var myArray =
// [{id:1, name:'John'},{id:2, name:'Rick'},];
//myArray.splice(0,1)
//console.log(myArray)

let fruits = [{id:1, name:'Apples'},{id:2, name:'Blueberries'},{id:3, name:'Oranges'},{id:4, name:'KIWI'}];
fruits.splice(0,1)
console.log(fruits);
// blueberries , Oranges , kiwi 


/*Sort the array in reverse order. (Not alphabetical, 
but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
    
 At the end you should see this outcome:
  ["Kiwi", "Oranges", "Blueberries"]*/
    
let fruits = ["Blueberries","Oranges","kiwi"];
fruits [0]="kiwi"
fruits [1]="Oranges"
fruits [2]="Blueberries"
console.log(fruits);



/*Using this array :
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
Access and then console.log “Oranges”.*/

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log (“ Oranges ”);

// si je comprends 
// jai trois arrays une bananne ;  une apple et blue ; et une orange 
console.log([2,0]);