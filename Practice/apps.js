let myElement = document.getElementById("myElement");
let timesClicked = 0;
/*
function changeWord(){
    if(myElement.innerHTML == "hello"){}
    myElement.innerHTML = "world";
}
*/

function changeWord(){
    timesClicked ++;
    if(timesClicked % 2 == 0){
        myElement.innerHTML = "world";
    } else {
        myElement.innerHTML = "hello";
    }
}