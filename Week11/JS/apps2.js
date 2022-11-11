/* 
Assume that there is a game where if there are three 1's in a row in will count as a "win". 

Create an application that: 

Takes input from the user in a text field
Assumes the input is a set of comma-separated values
Splits the input into an array
Uses a loop to check to see if there are three "1s" in a row in the array
Displays the word "winner" or "not winner" on the document depending on the result
*/

let txt;
let words;
let count;
let found;

let h1 = document.getElementById('h1');

function get() {
    txt = document.getElementById("txt").value;
    words = [];
    count = 0;
    found = false;
    words = txt.split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        if (words[i] === "clear" || words[i] === "water" || words[i] === "tires") {
            found = true;
            count++;
        }
    }

    if (found && count === 1) {
        h1.innerHTML = count + " too many naughty words."
    } else if (found && count > 1) {
        h1.innerHTML = count + " TOO MANY NAUGHTY WORDS!"
    } else if (!found) {
        h1.innerHTML = "No bad words. YAY!"
    }

    document.getElementById("txt").value = "";
}