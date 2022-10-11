/*Write a loop that displays in a div the numbers 1000, 2000, 3000, 4000, 5000. 
There should only be one line of code inside of your loop.
*/
//create the div and bring it to the js file
let num = document.getElementById("num");

let numbers = ["1000", "2000", "3000", "4000", "5000"];


//make the loop to display each number
for(var i = 0; i < numbers.length; i++){
    console.log("i"+i);
    let itemAtIndex = numbers[i];
    console.log(itemAtIndex);
}

