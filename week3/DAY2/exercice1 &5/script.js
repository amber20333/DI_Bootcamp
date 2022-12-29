// Using a DOM property, retrieve the h1 and console.log it.

const h1 = document.getElementsByTagName("h1")[0]
console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.

const lastP = document.getElementsByTagName("p")[3]
console.log(lastP);
lastP.remove()

// or document.getElementsByTagName("article")[0].lastElementChild;
// lastP.remove()


// Add a event listener which will change the background color of the h2 to red,
//  when it’s clicked on.

const h2 = document.getElementsByTagName("h2")[0]
console.log(h2);

h2.addEventListener("click",backRed)

function backRed( ) {
    document.body.style.backgroundColor = "red";
}

// Add an event listener which will hide the h3 when 
// it’s clicked on (use the display:none property).

let h3 = document.getElementsByTagName("h3")[0]

h3.addEventListener("click",nothingAppear)

function nothingAppear() {
    document.h3.style.display = "none";
    // or  h3.style.display ="none"
}

// Add a <button> to the HTML file, that when clicked on, 
// should make the text of all the paragraphs, bold.

let button = document.createElement("button");
button.innerHTML = "Change font"
document.body.appendChild(button)
button.addEventListener("click", changeToBold);
function changeToBold() {
    document.body.style.fontWeight = 'bold'
}


// exercice 5
let secondP = document.getElementsByTagName("p")[1]
console.log(secondP)
secondP.addEventListener("mouseover", function () {
    secondP.style.opacity = "0.2"
    secondP.style.transition = "0.3s"
});

secondP.addEventListener("mouseout", function () {
    secondP.style.opacity = "1"
    secondP.style.transition = "0.3s"
});
 
 