/* 
This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div to a purple color.

9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
1 div that will change colors to the rgb color calculated

1 div that shows the current calculated rgb color

You must use attributes on the buttons for the values to change the colors by.
*/

//setting the color values, starting with 255.
let red = Math.round(Math.random() * 255);
let green = Math.round(Math.random() * 255);
let blue = Math.round(Math.random() * 255);
//pulling elements from html
let div = document.getElementById("color");
let rgb = document.getElementById("rgb");

//change color with numbers on screen
div.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
rgb.innerHTML = "Current color: rgb(" + red + "," + green + "," + blue + ")";


//pull function from html
function morph(event) {
    //make var color and use event.target to pull data-color from button
    let color = event.target.getAttribute("data-color");
    //same with value
    let value = event.target.getAttribute("data-num")
    //take string from html, parse and return as integer so vsc can do math for me
    value = parseInt(value);

    //if red is less than value 255 and color is completely equaly to "red", then the value is determined by amount added
    if (red < 255 && color === "red") {
        red += value;
        //makes it so red cant be above 255 value
        if (red > 255) {
            red = 255;
        }
        //same for green and blue
    } else if (green < 255 && color === "green") {
        green += value;
        if (green > 255) {
            green = 255;
        }
    } else if (blue < 255 && color === "blue") {
        blue += value;
        if (blue > 255) {
            blue = 255;
        }
    }
    //run functions set before to apply the new value created based on which button the user clicks
    div.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    rgb.innerHTML = "Current color: rgb(" + red + "," + green + "," + blue + ")";
    
}