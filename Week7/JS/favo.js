/* Create a string array. List at least five of your favorite things in that array.

Then, write a loop that writes to a div element each of them, with the string ", 
is one of my favorite things." after the thing. For instance, one line in the div might say, 
"Pizza, is one of my favorite things."*/

favorite = ["piper", "coffee", "pokemon", "sleep", "music"];
/*
let piper = document.getElementById("piper");
let coffee = document.getElementById("coffee");
let pokemon = document.getElementById("pokemon");
let sleep = document.getElementById("sleep");
let music = document.getElementById("music");

var divs = document.getElementsByTagName("div");
for(var i = 0; i < 5; i++){
  favorite.innerHTML = " < br/>";
   divs[i].innerHTML = "is one of my favorite things.";
} */


var arrayVariable = ["piper", "coffee", "pokemon", "sleep", "music"];
var arrayLength = arrayVariable.length;
var temp;

for (i = 0; i < arrayLength; i++) {
  temp = document.createElement('div');
  temp.className = 'results';
  temp.innerHTML = arrayVariable[i] + " is one of my favorite things.";
  document.getElementsByTagName('body')[0].appendChild(temp);
}