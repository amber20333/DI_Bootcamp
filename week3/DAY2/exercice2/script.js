// Retrieve the form and console.log it.

let form = document.getElementsByTagName("form")[0]
console.log(form)

// document.forms[0]
// document.forms[0].elements.lname
// document.forms[0].elements.fname

// Retrieve the inputs by their id and console.log them.

 let inputsid = document.getElementById("lname")
 console.log(inputsid);

 
// Retrieve the inputs by their name attribute and console.log 

const inputName = document.getElementsByName("fname")[0]
console.log(inputName);


//  4//

let submit = document.getElementById("submit")
console.log(submit);

submit.addEventListener("click", sumbitForm)

function sumbitForm(e) {
    e.preventDefault(); 
     console.log(inputName.value);
     console.log(inputsid.value);
     function notEmptyCheck(name)
{


// requiere or if (name.value.length == 0)
//       { 
//          alert("Name can not be empty.");  	
//          return false; 
//       }  	
//       return true; 
// }    
// }
}
}

// create an li per input value

 let newI = document.inputids.createElement(li)
 console.log(newI);

//  then append them to a the 
//  <ul class="usersAnswer"></ul>, below the form. 

let ul = document.getElementsByClassName(usersAnswer)

 document.newI.appendChild(ul)