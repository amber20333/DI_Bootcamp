//v = pi.1.25 * r power of 3 , volume = (4/3) * Math.PI * Math.pow(radius, 3);

let button = document.getElementById("submit");

button.addEventListener("click", volumeOfSphere);

function volumeOfSphere(event){
    let form = document.getElementById("MyForm");
    let volumeField = document.getElementById("volume")

    let radius = form.radius.value, volume =(Math.PI * 1.3333) * Math.pow(radius, 3).toFixed(2);

    let roundedVolume = volume.toFixed(2)
    
    // The toFixed() method rounds the string to a specified number of decimals.
    volumeField.value ="≈"+ roundedVolume

    event.preventDefault()
};