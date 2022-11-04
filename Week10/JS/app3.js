// remove every instance of # from the string and return 
//cleaned uo version
// button input and div

let text = document.getElementById("text");
let div = document.getElementById("div");

function cleanUp(){
    clear();
}

function clear(){
    text = text.ariaValueMax;
    div.innerHTML = text.replaceChild( / # /gi, "");
}