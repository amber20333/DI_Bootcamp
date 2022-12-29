 let sentence = "The movie is not that bad, I like it";

let array = sentence.split("");// pour divier soit en lettre soit en mot 
console.log(array);
let wordNot = sentence.indexOf("not");// the posiiton of the first currency 
console.log(wordNot);
let wordBad = sentence.indexOf("bad");
console.log(wordBad);

if (wordBad > wordNot) { // word bad come after 
    array.splice(wordNot,wordBad+3,"good") // delete 
    console.log(array.join("")); // join contraitre de split 
}


// let wordNot = sentence.indexOf("not");
//  console.log(wordNot);

//  let wordBad = sentence.indexOf("bad");// indexof where is the starting of the letter 
//   console.log(wordBad);

//   if (wordBad > wordNot) {
//     let str1 = sentence.substring(0,wordNot);
//     console.log(str1);
//     let str2 = sentence.substring(wordBad + 3,sentence.length);
//     console.log(str2);
//     console.log(str1 + "good" + str2);
//   } else {
//     console.log(sentence);
//   }

 
 
