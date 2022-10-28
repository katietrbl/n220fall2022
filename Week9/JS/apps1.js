
/* Create an page with an input, and a button. 
When the button is clicked, output the phrase 
"Hello {Name}" to the developer console, with {Name} 
being the value the user put into the input field. */


//begin with setting the div of hello. 
let speakEl = document.getElementById("hello");

console.log(speakEl);

function sayHello(){
    speakEl.push(document.getElementById("userinput").value); 
    speakEl.innerHTML = "Hello " + ("userinput") 
}