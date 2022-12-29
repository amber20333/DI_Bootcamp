// Part I
// In your Javascript file, using setTimeout,
//  call a function after 2 seconds.
// The function will alert “Hello World”.

const element = setInterval(addPara,2000);
// setTimeout(alertH, 20000);
// setTimeout(addtwosecondP, 20000);

function start () {
    setTimeout(alertH, 20000);
}

//it will be called after 2 seconds
function alertH (){
     alert("hello world")
    
}

   




// Part II
// In your Javascript file, using setTimeout,
//  call a function after 2 seconds.
// // The function will add a new paragraph <p>Hello World</p>
//  to the <div id="container">.

function start () {
    setTimeout(addtwosecondP, 20000);
}

//it will be called after 2 seconds
function addtwosecondP (){
    //    we retrive the div 
    let div = document.getElementById("container")
    let newP = div.createElement("p");
    let node = document.createTextNode("hello wordl");
    if (container.children.length <5) {
        div.appendChild(newP)
    }else {
     const element = setInterval(addPara,2000);
    }
}

start()  



// Part III

// const element = setInterval(addPara,2000);

function addPara () {
    let bouton = document.getElementById("clear")

bouton.addEventListener("click",clearinterval)
}
 
   function clearinterval( ) {
     
    clearInterval(element)
    // le non de mon setInterval
   }





 

 

 

 

