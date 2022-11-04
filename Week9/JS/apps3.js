/* Create a number guessing name, using an input and a button to gather a number.
The number to be guessed should be a hard-coded whole number between 1 and 20.
Tell the user if the number is too high, equal to, or too low than a 
number you have hard-coded in your application.
Remove the text in the input when the user clicks the button. */

let submitEl = document.getElementById("submitguess");

var number = 8;

function guess() {
    let num = parseInt(document.getElementById("num").value);
    if (num > 20 || num <= 0) {
        return submitEl.innerHTML = "Enter a number between one and twenty.";
    } else if (num === number) {
        return submitEl.innerHTML = "Correct, good job!";
    } else if (num !== number) {
        if (num > number) {
            return submitEl.innerHTML = "This is the wrong answer, try a smaller number!";
        } else if (num < number) {
            return submitEl.innerHTML = "This is the wrong answer, try a larger number!";
        }
    }
}