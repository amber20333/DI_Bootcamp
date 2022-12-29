// Create a banner saying 
// "The sales end in 10min ! " . 
// Style the banner and make it visible to the user after 5 sec.

 

let banner = document.createElement("h1");
let textBanner = document.createTextNode("The sales end in 10min!");
banner.style.backgroundColor = "red";

banner.addEventListener("click",bannerTime)

function bannerTime () {
banner.appendChild(textBanner);
document.body.appendChild(banner);
console.log(banner + " " + textBanner);
}

setTimeout(bannerTime, 5000)