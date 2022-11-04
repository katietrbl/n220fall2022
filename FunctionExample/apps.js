/*let numb = 0;

function increment(){
    numb = numb + 1;
}

*/
let container = document.getElementById("container");
let awkwardSilence = [
"The answer is obvious", 
"I dont care", 
"...", 
"Im trying to take notes"];


//manipulate arrays
//map
    //modify elements
//reduce
    //returns a single number
//foreach
    //loops through all the elements
//filter
    //returns a sub-array



/*
//filter
//this prints an array for everything that returns true from the original fct ie: anything that contains an i
let iCollection = awkwardSilence.filter( function(thought) {
    return thought.toLowerCase().includes('i')
})
console.log(iCollection);



//more common way to write the last function (filter)
let iCollection = awkwardSilence.filter( (thought) =>  thought.toLowerCase().includes('i')
);
console.log(iCollection);
*?







let tally = 0;
let passed = true;
for(var i = 0; i < awkwardSilence.length; i++){
    let thought = awkwardSilence[i];

    console.log(i);

    if(thought.toLowerCase().includes("i")){
       // tally += 1;
       passed = false;
       //break;
    }
}


// ! = passed === false 
if(!passed){
    container.innerHTML = "Test failed."
}

if(iCollection.length > 0){
    container.innerHTML = "test failed";
}
*/