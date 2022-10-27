//create each of the words as divs, and then setting them
//textnodes so that they can be appended
/*let there = document.createElement("There");
let you = document.createElement("You");
let are = document.createElement("Are");

var newContent = document.createTextNode("There");
var newContent = document.createTextNode("You");
var newContent = document.createTextNode("Are");
*/

//start with there, then click the word there to change to you
//doing this by doing an if statement
let myElement = document.getElementById("myElement");
let timesClicked = 0;
/*
function changeWord(){
    if(myElement.innerHTML == "hello"){}
    myElement.innerHTML = "world";
}
*/

function changeWord(){
    timesClicked ++;
    if(timesClicked % 2 == 0){
        myElement.innerHTML = "world";
    } else {
        myElement.innerHTML = "hello";
    }
}
