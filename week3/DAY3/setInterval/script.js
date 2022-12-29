// setInterval(function to call, delay)

setInterval(sayHi, 1000); //I want to call the sayHi function EVERY second

function sayHi(){
    console.log("hello");
}

// --------------------
// clearInterval(index of the interval)
// -------------------

const timerOne = setInterval(addDiv, 1000);//global variable
//decalred in the global scope
// I create an interval, that calls the function addDiv everysecond
let counter = 0;

//add the div, 10 times
function addDiv (){
    counter++;
    if(counter <= 3) {
        const section = document.getElementById("wrapper")
        const myDiv = document.createElement("div");
        myDiv.textContent = "hello";
        myDiv.classList.add("banner");
        section.appendChild(myDiv);
    } else {
        clearInterval(timerOne) //clearInterval(1)
        console.log(timerOne);
    }
}

// const intervalOne = setInterval(sayHi, 1000); //id 1
// const intervalAgain = setInterval(sayHi, 1000); // 2

// function sayHi (){
//     console.log("hello");
// }

// setInterval() //1
// setInterval() //2
// setInterval()
// setInterval()

if (condition) {
    
}