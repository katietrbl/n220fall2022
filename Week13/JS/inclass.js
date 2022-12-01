let cardDiv = document.getElementById("card");
let totalDiv = document.getElementById("total");
let btnHit = document.getElementById("btnHit");
let btnStay = document.getElementById("btnStay");
let w1Div = document.getElementById("w1");
let playing = true;


let total = 0;
let cpuTotal = 0;

let cards = [
    { value: 2, name: "2"},
    { value: 3, name: "3"},
    { value: 4, name: "4"},
    { value: 5, name: "5"},
    { value: 6, name: "6"},
    { value: 7, name: "7"},
    { value: 8, name: "8"},
    { value: 9, name: "9"},
    { value: 10, name: "10"},
    { value: 10, name: "J"},
    { value: 10, name: "Q"},
    { value: 10, name: "K"},
];

function shuffleArray(array){
    for(var i = array.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/*
//clone of data of cards
let gameCards = shuffle(cards); 

function shuffle(deckToShuffle){
    let newDeck = [];
    //let clondeDeck = deckToShuffle;

    for(let i = 0; i < cards.length; i++){
        let cards = deckToShuffle.splice(i, 1);
        console.log(card);
    }

    //pick out cards at random and put them into array at random

    return newDeck;
}
*/

function drawCard(){

    if(playing){
        //-----player---------
    let card = cards.pop();

    
    //display card to user
    cardDiv.innerHTML = card.name;

    //update total
     total += card.value;
     totalDiv.innerHTML = total;


     //-----------cpu------------
        card = cards.pop();
        cpuTotal += card.value;




    //check for loss
    check();
    }

}

function stay(){
    //calculate closeness
    let closeness = 21 - total;


    //add to score (local storage)
}

function check(){

    if(total > 21){
        //then game over

        //say game over
        totalDiv.innerHTML = total + " - too high. Game over."
        //dont allow more input
        btnHit.disabled = true;

    }

}

function gameOver(){
    if(total > 21){
        //the lose
    } else {
        if(total > cpuTotal){
            //they win
            totalDiv.innerHTML = "you win";
            let wins = Number(localStorage.getItem("wins"));
            localStorage.setItem("wins", wins + 1);
        }else{
            totalDiv.innerHTML = "you lose";
            let losses = Number(localStorage.getItem("losses"));
            localStorage.setItem("losses", losses + 1);
        }
    }
    w1Div.innerHTML = "wins: " + (localStorage.getItem("wins") + " losses: " + localStorage.getItem("losses"));
}
