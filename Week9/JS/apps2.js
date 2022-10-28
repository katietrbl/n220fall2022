/*  Make a page with one input and one button (Seeing a trend?). 
When the button is clicked (assuming the value typed into the input 
    is numerical), calculate both the tip and the full value of the bill 
    to be paid. Output both to the console, formatted as such:

"Tip: $X. Total: $X"  */

var myBtn = document.getElementById('my-button');
var tipElem = document.getElementById("tip");
var totalElem = document.getElementById("total");

//attach click event listener
myBtn.addEventListener('click', calc);

//the event object is passed to this automatically - I'm assigning it to "e"
function calc(e) {
  //prevent the default action - form submit / page refresh
  e.preventDefault();
  var input = document.getElementById('bill');
  //convert string value to Number
  var bill = parseFloat(input.value);
  var tip = bill * 0.15;
  var total = bill + tip;

  //textContent is better than innerHTML for setting text
  tipElem.textContent = "$"+(tip).toFixed(2);
  totalElem.textContent = "$"+(total).toFixed(2);  
}