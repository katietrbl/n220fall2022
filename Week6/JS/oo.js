//here im setting variables so i can manipulate them later such as the size of the box and the colors i want it to choose between
let square = {height: 100, width: 100};
let colors = ["#000000", "#00FFFF"]

//now i set up the div so that i can edit it further
for(var i = 0; i++;) {
    let aDiv = document.createElement("div");
    aDiv.innerHTML = square[i];
    aDiv.style.width = "100px";
    aDiv.style.height = "100px";
    aDiv.style.position = "absolute";
    aDiv.style.top = (100) + "px";
    aDiv.style.left = (100) + "px";
    aDiv.style.backgroundColor = (0, 255, 255);
    document.body.appendChild(aDiv);
}
//then i append!



