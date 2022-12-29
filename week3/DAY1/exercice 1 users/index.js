 

// 1.

  let div1 = document.querySelector("#container");
  console.log(div1)

let ul1 = div1.nextElementSibling;
console.log(ul1);
// john and pete 

const liPeete = ul1.children[1]
console.log(liPeete);
// // we see only pete 

 


// // 2.
const change = liPeete.textContent = "Richard";
console.log(change);
//  we can see richard 


// 3.Change each first name 
// of the two <ul>'s to your name.

let list1 = document.getElementsByTagName("li");
let first = list1[0];
console.log( first);
first.textContent = "Amber";

let list2 = document.getElementsByTagName("li");
let first2 = list2[2];
console.log(first2.textContent);
first2.textContent = "Amber";
 
 

 
// 4.Delete the <li> that contains the text node “Sarah”.

// let div2 = document.body.firstElementChild;
// console.log(div2);

let list = document.getElementsByClassName("list");
console.log(list);
// je vois les deux listes 

let first1 = list[0];
console.log(first1);

let second = list[1];
console.log(second);

const liSarah = second.children[2];
liSarah.remove();
console.log(liSarah);
// sarah  et remove 


// 3. bonus
// Add a class called  to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

// function toAdd() {  
//     let a = document.getElementById("ul");  
//     a.list.add("student_list");  
//     }  

//     toAdd()
    
 
