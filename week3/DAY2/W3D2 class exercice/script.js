// Exercise 1 - basic add event listener

// Create two buttons - id of "red", id of "blue"
// When we click on the red button -> Change the backgroundcolor of the page to red
// When we click on the blue button -> Change the backgroundcolor of the page to blue


const FirstBtn = document.getElementById("red")
const ScecondBtn = document.getElementById("blue")


FirstBtn.addEventListener("click",colorRed)
ScecondBtn.addEventListener("click",colorBlue)

function colorRed() {
    document.body.style.backgroundColor ="red";
}

function colorBlue() {
    document.body.style.backgroundColor ="blue";
}


// // en une fonction 
// FirstBtn.addEventListener("click",colorChange)
// ScecondBtn.addEventListener("click",colorChange)

// function colorChange(event) {
//     console.log(event);
//     // voir target 
//     console.log(event.target.id);
// on ecrit toujours event.target.ce qu'on cherche 
//     document.body.style.backgroundColor = event.target.id ;


// }

// Exercise 2 - using the event object

// const colors = ["blue", "yellow", "green", "pink"];
// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color 
// of the document, to the text content of the button 
// (do it directly in the JS)

 

const colors = ["blue", "yellow", "green", "pink"];

// Add one button per color inside the div container (do it directly in the JS)

 
function addBouton() {
    const divcontainer = document.quierySelector("#container");
for (let index = 0; index < colors.length; index++) {
    const btn = document.createElement("bouton");
     btn.textContent = colors[i];
     btn.setAttribute("id",colors[i])
     btn.addEventListener("click", changeBg);
}

}

addBouton()

function changeBg(event) {
    document.body.style.backgroundColor = event.target.id ;
}

// Exercise 3 - Pictures

// const pics = [ "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" "https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ];

// Using this array, create a button on the page that when clicked on display 3 animals photo, but the order of the picture should be random
// Set a class to the image, so each image will be 200px height, and width, and in the middle of the page
// Add a button next to each image
// When we click on one image, it should disapear(ie. be deleted),
// When we hover on the image, it should display the "alt".
