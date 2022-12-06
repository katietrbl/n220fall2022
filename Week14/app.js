let myContent = document.getElementById('myContent');
//longterm memory
let selectedElement = null;



//getelementbyclassname or queryselectorall
let navItems = document.querySelectorAll('.navItem');
console.log(navItems)

for(let i = 0; i < navItems.length; i++){

    let navItem = navItems[i];
    navItem.addEventListener("click", doThing);
}


let pageContent = [
    "this is home",
    "this is about",
    "this is search",
    "this is AAAAAAAAA"
]

function doThing(event){
    //prevent dry code!
    //allows us to modify whats cliced on
    //event.target is always the thing that was clicked on
        //console.log(event)
        //console.log(event.target) //this can say what is clicked to make it so we know what the user wants
    
    //when event happens, text changes to green
    event.target.style.color = "#00FF00"

    let pageId = Number(event.target.dataset.content);

    //make element to take data from html 
    let content = event.target.dataset.content;
    //take element text from dataset
    myContent.innerText = content;



    //highlight one clicked as green but now with this if itll make the last one clicked turn back black
    if(selectedElement){
        selectedElement.style.color = "#000"
    }



    //remember what was clicked
    selectedElement = event.target;

}



