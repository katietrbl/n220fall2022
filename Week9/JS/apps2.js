/*  Make a page with one input and one button (Seeing a trend?). 
When the button is clicked (assuming the value typed into the input 
    is numerical), calculate both the tip and the full value of the bill 
    to be paid. Output both to the console, formatted as such:

"Tip: $X. Total: $X"  */

//set div ids to be manipulated
let balancedue = document.getElementById("balancedue");
let gratuity = document.getElementById("gratuity");

//function for calculating the total for the bill
function getTotal() {
    //this function does the math for us of adding the gratuity to the balance due
    let total = parseFloat(balancedue.value) + parseFloat(gratuity.value);
    document.getElementById("result").innerHTML = "Tip: $" + gratuity.value + ". " + "Total: $" + balancedue + ".";
    console.log("Tip: $" + gratuity.value + ". " + "Total: $" + total + ".");
}