let colors = ["#042a2b", "#5eb1bf", "#cdedf6", "#ef7b45", "#d8A727", "red"];
//square brackets means array

/*
for(let i = 0; i < colors.length; i++){
    console.log("hi! - " + i + " " + colors[i]);
}
*/

//these two do the same thing with different syntax 

/*
let i = 0;
while(i < 5) {
    console.log("hi! - " + i);
    i++;
}

//if;once while;forever or infinite loop
*/



colors[4]="red"
console.log(colors);



for(var i = 0; i < colors.length; i++){
    let aDiv = document.createElement("div");
    aDiv.innerHTML = colors[i];
    aDiv.style.width = "100px";
    aDiv.style.height = "100px";
    aDiv.style.position = "absolute";
    aDiv.style.top = (Math.random() * 200 ) + "px";
    aDiv.style.left = (Math.random() * 200 ) + "px";
    aDiv.style.backgroundColor = colors[i];
    document.body.appendChild(aDiv);
}

function placeDiv(){
     
}
