//is divisible by seven

//create an app with an input and a button.
//when user click, update a div on page
//to tell user if what they typed is divisible by 7 or not
//function that shows true or false

let div = document.getElementById("div");

function run(){
    check();
}

function check(){
    let num = document.getElementById("num");
    if(num % 7 === 0){
        return div.innerHTML = "True";
    } else if (num % 7 !== 0){
        return div.innerHTML = "False";
    }
}