//create a fct that gives a random number  between 1 - 10
//make a button, when click display a different rand number

let number = document.getElementById("number");

function getNum(){
    randNum();
}

function randNum(){
    number.innerHTML = "Number = " + Math.round(Math.random() * 10)
}