/*Get the player move
randomly select a move for the computer
Compare the two using if/else ifs to figure out which side won/lost/tie'd
Show the output from the current round on the div as: 
`Computer chose XMOVE, player chose YMOVE, FINAL_OUTCOME` */

//button for user
/*let rocky = document.getElementById("rock"); //0
let papey = document.getElementById("paper"); //1 
let scissy = document.getElementById("scissor"); //2
*/
let res = document.getElementById("result");

var map = {};

function play(event){

//num for computer to choose
let randomVar = Math.round(Math.random()*2);

let value = event.target.getAttribute("data-value");


//changes numbers set in html into integer so the math can happen
value = parseInt(value);

//value = player choice randomVar = computer random choice, follow up 
if(value === 0 && randomVar === 2){
    //show result rocks wins for player
    res.innerHTML = ("Computer chose scissors. You win with rock!");
    console.log("Player wins.")
}
else if(value === 0 && randomVar === 1){
    //show result paper wins for computer
    res.innerHTML = ("You chose rock. Computer wins with paper.");
}
else if(value === 0 && randomVar === 0){
    //show result rock tie
    res.innerHTML = ("Both you and the computer chose rock, its a tie!");
}

////////////

if(value === 1 && randomVar === 2){
    //show result scissor wins for computer
    res.innerHTML = ("You chose paper. Computer wins with scissors.");
}
else if(value === 1 && randomVar === 1){
    //show result paper ties
    res.innerHTML = ("Both you and the computer chose paper, it's a tie.");
}
else if(value === 1 && randomVar === 0){
    //show result paper wins for player
    res.innerHTML = ("Computer chose rock. You win with paper!");
}

///////////////

if(value === 2 && randomVar === 2){
    //show result tie for scissor
    res.innerHTML = ("You both chose scissor. It's a tie.");
}
else if(value === 2 && randomVar === 1){
    //show result scissor wins for player
    res.innerHTML = ("Computer chose paper. You win with scissors.");
}
else if(value === 2 && randomVar === 0){
    //show result rock wins for computer
    res.innerHTML = ("You chose scissors. Computer wins with rock.");
}
}





