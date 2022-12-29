
// exercice 1 // DOM Tree

let div  = document.body.firstElementChild;
console.log(div);
//document.body.children[0]


let ul = div.nextElementSibling;
console.log(ul);
// or document.body.children[1]

let liPete = ul.children[1]
console.log(liPete);
// let liPete = ul.lastelementchild
