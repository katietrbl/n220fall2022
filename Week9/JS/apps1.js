
/* Create an page with an input, and a button. 
When the button is clicked, output the phrase 
"Hello {Name}" to the developer console, with {Name} 
being the value the user put into the input field. */

var namesArray = [];
let speakEl = document.getElementById("hello");
console.log(speakEl);

function addName(){
    namesArray.push(document.getElementById("userinput").value);
    console.log(namesArray);
    speakEl.innerHTML = "Hello " + namesArray;
}

