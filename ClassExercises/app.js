//fortune cookie app

//creating array with random fortunes

fortuneArray = ["You will find luck today!", "Good luck young grasshopper...", 
"Your house is going to explode. Soon. I can't say when, but soon.", "Public transit is the devil.", "You need to eat fiber.",
"It is all your fault Samantha.", "There are bugs in your skin. There are bugs in your skin. There are bugs in your skin. There are bugs in your skin." ];


//setting the cookie div to an element on the js
let cookieEl = document.getElementById("fortune");
//test that the connection works by console.log
console.log(cookieEl);


//create function to get the user a fortune
function getFortune(){
        //here, this is making the math happen so that the user will get a completely random fortune
        var randomFortune = fortuneArray[Math.floor(Math.random()*fortuneArray.length)];
        //this displays the text of their fortune on the page
        cookieEl.innerHTML = randomFortune;
    
}

//here im making the button for if the user wants to create a new fortune. i start with an empty array so it will pop up with what they typed
var fortarray = [];
function addFortune(){
    fortarray.push(document.getElementById("userinput").value); 
   console.log(fortarray); 
   cookieEl.innerHTML = fortarray;
}