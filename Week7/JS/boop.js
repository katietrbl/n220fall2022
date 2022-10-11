/* Write a loop that runs 25 times and writes the iterand (current iteration of the loop) 
out onto the page inside of a div element */
/* However,

When the iterand is divisible by 3, write the word "beep" instead
When the iterand is divisible by 5, write the word "bop" instead
When the iterand is divisible by 3 AND 5, write "beepbop" instead
*/


//creating the div
let num = document.getElementById("num");
//numbers divisible by respective variable names to be given
let beep = ["3", "6", "9", "12", "15", "18", "21"];
let bop = ["5", "10", "15", "20", "25"];
let beepbop = ["15"];


//print 25 times
for(let i = 0; i < 25; i++){
    //creating spaces between each number
    if (i % 3 === 0 && i % 5 !== 0){
        num.innerHTML += "beep" + " <br />";
      } else if (i % 5 === 0 && i % 3 !== 0){
          num.innerHTML += "bop" + " <br />";
      } else if (i == 15){
          num.innerHTML += "beepbop" + " <br />";
      } else{
        num.innerHTML += i + " <br />";
      }
}