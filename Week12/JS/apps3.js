/*
An application with 3 buttons that ask questions.
 For instance, they might ask "What is the capital of Indiana?". 
 Each button should have a data-answer attribute that lists the answer.

When a button is clicked, display the answer to the button's question in a div. 
Use only one function, and that function must make use of the button's data-attribute.


*/
 //pull function from html
function flip(event){
    //create var answer to make an event.target so that it can take the attribute from data-value to show the answer when it is clicked
    let answer = event.target.getAttribute("data-value");
    //show user text of answer on top of "card"
    event.target.innerHTML = answer;
}


/*
function restart(){
    document.getElementById("buttons").reset();  
}*/